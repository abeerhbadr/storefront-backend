import { order, product, order_product, StoreOrder } from '../order';

const stOrder = new StoreOrder();

describe('Order Model', () => {
  it('should have a create method', () => {
    expect(stOrder.create).toBeDefined();
  });
  it('should have a show method', () => {
    expect(stOrder.showCurrentOrder).toBeDefined();
  });

  it('create method should return the correct order', async () => {
    const o: order = {
      id: 1,
      userid: 1,
      ostatus: 'active',
    };
    const op1: product = {
      productid: 1,
      productqty: 3,
    };
    const op2: product = {
      productid: 2,
      productqty: 1,
    };
    console.log('op len:', [op1].length);
    const result = await stOrder.create(o, [op1, op2]);
    console.log('op len:', [op1].length);
    console.log(result);
    expect(result.userid).toEqual(1);
    expect(result.ostatus).toEqual('active');
  });

  it('show method should return the correct order', async () => {
    const result = await stOrder.showCurrentOrder(1);
    //console.log('res:', result);
    expect(result[0].userid).toEqual(1);
    expect(result[0].ostatus).toEqual('active');
    expect(result[0].productid).toEqual(1);
    expect(result[0].productqty).toEqual(3);
  });
});
