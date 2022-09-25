import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test users endpoints responses', () => {
  var originalTimeout;
//   beforeAll(function () {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
//   });
  it('gets the /store/users endpoint', async () => {
    // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 1999999;
    const res = request.get('/store/users');
    expect((await res).status).toBe(200);
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
