import client from './../database/database';

export type person = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};

export class Person {
  async index(): Promise<person[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM person';
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users ${error}`);
    }
  }

  async create(u: person): Promise<person[]> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO person (firstname, lastname, password) VALUES (${u.firstname}, ${u.lastname}, ${u.password})`;
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users ${error}`);
    }
  }

  async show(id: number): Promise<person[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM person where id=${id}`;
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users ${error}`);
    }
  }
}
