const MockProvider1 = require('./Providers/MockProvider1');
const MockProvider2 = require('./Providers/MockProvider2');
const { retryWithBackoff } = require('./helperfunctions/retryLogic');
const { isDuplicate, markAsSent } = require('./helperfunctions/idempotencyLogic');
const { checkRateLimit } = require('./helperfunctions/rateLimiter');
const { logStatus } = require('./helperfunctions/statusTracker');

class EmailService {
  constructor() {
    this.providers = [new MockProvider1(), new MockProvider2()];
    this.currentProviderIndex = 0;
  }

  async sendEmail(emailRequest) {
    const { requestId } = emailRequest;

    if (isDuplicate(requestId)) {
      return logStatus(requestId, 'duplicate', 'Already sent.');
    }

    if (!checkRateLimit()) {
      return logStatus(requestId, 'rate-limited', 'Rate limit exceeded.');
    }

    for (let i = 0; i < this.providers.length; i++) {
      const provider = this.providers[this.currentProviderIndex];
      this.currentProviderIndex = (this.currentProviderIndex + 1) % this.providers.length;
      

      try {
        await retryWithBackoff(() => provider.send(emailRequest), 3);
        markAsSent(requestId);
        return logStatus(requestId, 'success', `Sent via ${provider.name}`);
      } catch (err) {
        logStatus(requestId, 'failed', `${provider.name} failed. Trying fallback.`);
      }
    }

    logStatus(requestId, 'error', 'All providers failed.');
  }
}

module.exports = EmailService;
