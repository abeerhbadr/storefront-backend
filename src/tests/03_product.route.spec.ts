import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


describe('Test products endpoints responses', () => {
  it('gets the /store/products endpoint', async () => {
    const res = await request.get('/store/products');
    console.log(res.body)
    expect(res.status).toBe(200);
  });
});
