function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff(fn, retries) {
  let delay = 1000;
  
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await wait(delay);
      delay *= 2;
    }
  }
}

module.exports = { retryWithBackoff };
