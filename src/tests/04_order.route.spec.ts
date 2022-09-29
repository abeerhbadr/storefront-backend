import app from '../server';
import supertest from 'supertest';
import {person} from './../models/user'

const request = supertest(app);

let token = '';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Test orders endpoints responses', () => {
  const u: person = {
    id: 1,
    firstname: 'Abeer',
    lastname: 'Hussein',
    password_: 'berobero'
  }
  it('makes a user before testing ordes', async () => {
    const res = await request.post('/store/users').send(u);
    token = res.body;
    console.log('token in order:', token)
    expect(res.status).toBe(200);
  });

  it('gets the /store/orders/active endpoint', async () => {
    const res = await request.get('/store/orders/active/1').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
