import { StoreProduct } from '../product';

const stProduct = new StoreProduct();

describe('User Model', () => {
  it('should have an index method', () => {
    expect(stProduct.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(stProduct.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(stProduct.create).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await stProduct.create({
      id: 1,
      name: 'toothbrush',
      price: 20,
      category: "tooth",
    });

    expect(result.name).toEqual('toothbrush');
    expect(result.price).toBeCloseTo(20,2);
    expect(result.category).toEqual('tooth');
});

  it('index method should return a list of users', async () => {
    const result = await stProduct.index();
    //console.log(typeof(result)) //gave me object
    expect(Array.isArray(result)).toBe(true);
  });

  it('show method should return the correct user', async () => {
    const result = await stProduct.show(1);
    expect(result.name).toEqual('toothbrush');
    expect(result.price).toBeCloseTo(20,2);
    expect(result.category).toEqual('tooth');
  });
});
