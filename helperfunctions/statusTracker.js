function logStatus(requestId, status, message) {
  console.log(`[${new Date().toISOString()}] [${requestId}] ${status.toUpperCase()} - ${message}`);
}

module.exports = { logStatus };
