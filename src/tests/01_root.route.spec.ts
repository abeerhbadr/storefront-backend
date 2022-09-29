import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test root and store endpoint response', () => {
  it('gets the / endpoint', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
  });

  it('gets the /store endpoint', async () => {
    const res = await request.get('/store');
    expect(res.status).toBe(200);
  });
});
