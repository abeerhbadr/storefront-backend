import app from '../../server';
import supertest from 'supertest';
import { person } from './../../models/user';

const request = supertest(app);

describe('Testing users endpoints responses', () => {
  let token = '';
  const u: person = {
    id: 1,
    firstname: 'Rawan',
    lastname: 'Hussein',
    password_: 'berobero',
  };

  it('tests the [POST] /store/users endpoint', async () => {
    const res = await request.post('/store/users').send(u);
    token = res.body;
    console.log('token in post:', token);
    expect(res.status).toBe(200);
  });

  it('tests the [GET] /store/users endpoint', async () => {
    console.log('token in get', token);
    const res = await request
      .get('/store/users')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  it('tests the [GET] /store/users/:id endpoint', async () => {
    console.log('token in get', token);
    const res = await request
      .get(`/store/users/1`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
