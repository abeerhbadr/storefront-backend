import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test products endpoints responses', () => {
  it('gets the /store/orders/active endpoint', async () => {
    const res = request.get('/store/products');
    expect((await res).status).toBe(200);
  });
});
