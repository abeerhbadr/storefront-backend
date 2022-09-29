import { NumericLiteral } from 'typescript';
import client from './../database/database';

export type order = {
  id: number;
  userid: number;
  ostatus: string;
};

export type product = {
  productid: number;
  productqty: number;
};

export type order_product = {
  id: number;
  userid: number;
  ostatus: string;
  orderid: number;
  productid: number;
  productqty: number;
};

export class StoreOrder {
  async create(o: order, p: product[]): Promise<order> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      //console.log('conn:',conn) //changed env ENV to test to connect to test database, when run npm run jasmine-ts
      const sql1 = `INSERT INTO storeorder (userid, ostatus) VALUES ($1, $2) RETURNING *`;
      const result1 = await conn.query(sql1, [o.userid, o.ostatus]);
      const sqlOrderId = `SELECT id FROM storeorder ORDER BY id DESC limit 1`;
      const orderId = await conn.query(sqlOrderId);
      console.log(result1.rows[0]);
      console.log('o id: ', orderId.rows[0]['id']);
      for (let i = 0; i < p.length; i++) {
        const sql2 = `INSERT INTO orderproduct (orderid, productid, productqty) VALUES($1, $2, $3) RETURNING *`;
        const result2 = await conn.query(sql2, [
          orderId.rows[0]['id'],
          p[i].productid,
          p[i].productqty,
        ]);
        console.log('op:', result2.rows[0]);
      }

      //console.log(result.rows[0])
      conn.release;
      return result1.rows[0];
    } catch (error) {
      throw new Error(`Cannot create order. ${error}`);
    }
  }

  async showCurrentOrder(userid: number): Promise<order_product[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM storeorder o join orderproduct op on o.id=op.orderid 
      where o.userid=($1) and o.ostatus='active'`;
      const result = await conn.query(sql, [userid]);
      conn.release;
      let resArr = [];
      for (let i = 0; i < result.rowCount; i++) {
        resArr.push(result.rows[i]);
      }
      return resArr;
    } catch (error) {
      throw new Error(`Cannot show current order. ${error}`);
    }
  }
}
