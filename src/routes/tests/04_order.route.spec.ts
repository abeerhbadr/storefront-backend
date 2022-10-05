import app from '../../server';
import supertest from 'supertest';
import { person } from './../../models/user';

const request = supertest(app);

describe('Test orders endpoints responses', () => {
  let token = '';
  const u: person = {
    id: 1,
    firstname: 'Abeer',
    lastname: 'Hussein',
    password_: 'berobero',
  };

  it('makes a user before testing ordes', async () => {
    const res = await request.post('/store/users').send(u);
    token = res.body;
    console.log('token in order:', token);
    expect(res.status).toBe(200);
  });

  it('tests the [GET] /store/orders/active endpoint', async () => {
    const res = await request
      .get('/store/orders/active/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
