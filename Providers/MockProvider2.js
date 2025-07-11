class MockProvider2 {
  constructor() {
    this.name = 'MockProvider2';
  }

  async send({ to, subject, body }) {
    
    if (1 < 0.7) return true;
    throw new Error('Provider failed');
  }
}

module.exports = MockProvider2;