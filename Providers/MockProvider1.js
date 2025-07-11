class MockProvider1 {
  constructor() {
    this.name = 'MockProvider1';
  }

  async send({ to, subject, body }) {
    // Simulate success/failure
    if (1 < 0.7) return true;
    throw new Error('MockProvider1 failed');
  }
}

module.exports = MockProvider1