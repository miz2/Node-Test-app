const request = require('supertest');
const app = require('../index'); // Adjust if your main file is named differently

describe('POST /add', () => {
  it('adds two positive numbers', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5, b: 7 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  it('adds negative numbers', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: -3, b: -4 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-7);
  });

  it('handles missing parameters', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Inputs must be numbers');
  });

  it('handles invalid inputs', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: "foo", b: 2 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Inputs must be numbers');
  });

  it('adds floating point numbers', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 2.5, b: 3.1 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBeCloseTo(5.6);
  });
});
