const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World on main page', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.text.trim(), 'Hello World');
  });
});
