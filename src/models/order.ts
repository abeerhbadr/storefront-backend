import client from './../database/database';

export type order = {
  id: number;
  userid: number;
  orderstatus: number;
};

export class StoreOrder {
  //   async create(o: order): Promise<order> {
  //     try {
  //       //@ts-ignore
  //       const conn = await client.connect();
  //       //console.log('conn:',conn) //changed env ENV to test to connect to test database, when run npm run jasmine-ts
  //       const sql = `INSERT INTO storeorder (userid, orderstatus) VALUES ($1, $2) RETURNING *`;
  //       const result = await conn.query(sql, [o.userid, o.orderstatus]);
  //       //console.log(result.rows[0])
  //       conn.release;
  //       return result.rows[0];
  //     } catch (error) {
  //       throw new Error(`Cannot create order. ${error}`);
  //     }
  //   }

  async showCurrentOrder(userid: number): Promise<order> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM storeorder o join orderproduct op on o.id=op.orderid where o.userid=($1) and o.orderstatus='active'`;
      const result = await conn.query(sql, [userid]);
      conn.release;
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot show current order. ${error}`);
    }
  }
}
