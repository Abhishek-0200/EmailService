# 📧 Resilient Email Sending Service

A fault-tolerant and modular email sending service built in **Node.js** to ensure reliable and efficient delivery of emails even when primary providers fail or limits are exceeded.

---

## 🚀 Key Features

- 🔁 **Retry Mechanism** with exponential backoff  
- 🔄 **Provider Fallback** logic for failover between providers  
- 🆔 **Idempotency Handling** to prevent duplicate sends  
- 📊 **Status Tracking** for request outcomes  
- 🚦 **Rate Limiting** to avoid provider overload  

---

## 🛠 Tech Stack

- JavaScript (Node.js)  
- No external libraries used  
- Custom logic for rate limiting, retries, and fallbacks  

---

## 📁 Folder Structure

```yaml
EmailService/
  helperfunctions/
    idempotencyLogic.js     # Prevents duplicate email sends
    rateLimiter.js          # Limits email requests
    retryLogic.js           # Handles retry with exponential backoff
    statusTracker.js        # Logs request status
  Providers/
    MockProvider1.js        # Simulated Email Provider 1
    MockProvider2.js        # Simulated Email Provider 2
  EmailService.js           # Core logic to send emails using providers
  index.js                  # Entry point to test/send emails
  README.md                 # Project documentation
