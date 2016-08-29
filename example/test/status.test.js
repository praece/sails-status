const request = require('supertest-as-promised');

describe('Status', () => {
  it('Test the app status endpoint', checkStatus);
});

function checkStatus() {
  this.timeout(5000);

  return request(sails.hooks.http.app).get('/api/status').expect(200);
}
