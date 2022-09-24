import { StoreOrder } from '../order';

const stOrder = new StoreOrder();

describe('User Model', () => {
  it('should have a show method', () => {
    expect(stOrder.showCurrentOrder).toBeDefined();
  });

  it('show method should return the correct user', async () => {
    const result = await stOrder.showCurrentOrder(1);
    console.log(result)
    //expect(result.pname).toEqual('toothbrush');
  });
});
