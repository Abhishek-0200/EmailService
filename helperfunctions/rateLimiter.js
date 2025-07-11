let sentCount = 0;
const LIMIT = 5;
setInterval(() => { sentCount = 0; }, 60000);

function checkRateLimit() {
  if (sentCount >= LIMIT) return false;
  sentCount++;
  return true;
}

module.exports = { checkRateLimit };