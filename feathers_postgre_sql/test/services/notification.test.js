const app = require('../../src/app');

describe('\'PostgreSQL\' service', () => {
  it('registered the service', () => {
    const service = app.service('notification');
    expect(service).toBeTruthy();
  });
});
