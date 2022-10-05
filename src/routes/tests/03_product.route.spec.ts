import app from '../../server';
import supertest from 'supertest';
import { person } from './../../models/user';
import { product } from './../../models/product';

const request = supertest(app);

describe('Testing products endpoints responses', () => {
  let token = '';
  const u: person = {
    id: 1,
    firstname: 'Nawal',
    lastname: 'Amin',
    password_: 'berobero',
  };

  it('makes a user before testing products', async () => {
    const res = await request.post('/store/users').send(u);
    token = res.body;
    expect(res.status).toBe(200);
  });

  const p: product = {
    id: 1,
    pname: 't-shirt',
    price: 20,
    category: 'clothes',
  };

  it('tests the [POST] /store/products endpoint', async () => {
    const res = await request
      .post('/store/products')
      .send(p)
      .set('Authorization', `Bearer ${token}`);
    token = res.body;
    expect(res.status).toBe(200);
  });

  it('tests the [GET] /store/products endpoint', async () => {
    const res = await request.get('/store/products');
    expect(res.status).toBe(200);
  });

  it('tests the [GET] /store/users/:id endpoint', async () => {
    const res = await request.get('/store/products/1');
    expect(res.status).toBe(200);
  });
});
