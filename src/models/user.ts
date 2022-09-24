import client from './../database/database';
import bcrypt from 'bcrypt';
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

export type person = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};

export class StoreUser {
  async index(): Promise<person[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM person';
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users. ${error}`);
    }
  }

  async create(u: person): Promise<person> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      //console.log('conn:',conn) //changed env ENV to test to connect to test database, when run npm run jasmine-ts
      const hash = bcrypt.hashSync(
        u.password + pepper,
        parseInt(saltRounds as string)
      );
      const sql = `INSERT INTO person (firstname, lastname, password) VALUES ($1, $2, $3) RETURNING *`;
      const result = await conn.query(sql, [u.firstname, u.lastname, hash]);
      //console.log(result.rows[0])
      conn.release;
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot create user. ${error}`);
    }
  }

  async show(id: number): Promise<person> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM person where id=($1)`;
      const result = await conn.query(sql, [id]);
      conn.release;
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot show user. ${error}`);
    }
  }
}
