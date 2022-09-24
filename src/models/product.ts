import client from './../database/database';

export type product = {
  id: number;
  pname: string;
  price: number;
  category: string;
};

export class StoreProduct {
  async index(): Promise<product[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM product';
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get products. ${error}`);
    }
  }

  async create(p: product): Promise<product> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      //console.log('conn:',conn) //changed env ENV to test to connect to test database, when run npm run jasmine-ts
      const sql = `INSERT INTO product (pName, price, category) VALUES ($1, $2, $3) RETURNING *`;
      const result = await conn.query(sql, [p.pname, p.price, p.category]);
      //console.log(result.rows[0])
      conn.release;
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot create product. ${error}`);
    }
  }

  async show(id: number): Promise<product> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM product where id=($1)`;
      const result = await conn.query(sql, [id]);
      conn.release;
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot show product. ${error}`);
    }
  }
}
