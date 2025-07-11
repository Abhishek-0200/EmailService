const sentRequests = new Set();
const pendingRequests = new Set();

function isDuplicate(requestId) {
  return sentRequests.has(requestId) 
  // || pendingRequests.has(requestId);
}

function markAsInProgressRequest(requestId) {
  pendingRequests.add(requestId);
}

function markAsSent(requestId) {
  pendingRequests.delete(requestId);
  sentRequests.add(requestId);
}

module.exports = { isDuplicate, markAsSent, markAsInProgressRequest };

