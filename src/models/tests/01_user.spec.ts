import { person, StoreUser } from '../user';
import bcrypt from 'bcrypt';
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

const stUser = new StoreUser();

describe('User Model', () => {
  it('should have an index method', () => {
    expect(stUser.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(stUser.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(stUser.create).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await stUser.create({
      id: 1,
      firstname: 'Abeer',
      lastname: 'Hussein',
      password_: 'berobero',
    });

    expect(bcrypt.compareSync('berobero' + pepper, result.password_)).toEqual(
      true
    );
    expect(result.firstname).toEqual('Abeer');
    expect(result.lastname).toEqual('Hussein');
  });

  it('index method should return a list of users', async () => {
    const result = await stUser.index();
    //console.log(typeof(result)) //gave me object
    expect(Array.isArray(result)).toBe(true);
  });

  it('show method should return the correct user', async () => {
    const result = await stUser.show(1);
    expect(bcrypt.compareSync('berobero' + pepper, result.password_)).toEqual(
      true
    );
    expect(result.firstname).toEqual('Abeer');
    expect(result.lastname).toEqual('Hussein');
  });
});
