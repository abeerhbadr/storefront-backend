import { StoreProduct } from '../product';

const stProduct = new StoreProduct();

describe('Product Model', () => {
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
    const result1 = await stProduct.create({
      id: 1,
      pname: 'toothbrush',
      price: 20,
      category: 'tooth',
    });

    const result2 = await stProduct.create({
      id: 2,
      pname: 'toothpaste',
      price: 20,
      category: 'tooth',
    });

    expect(result1.pname).toEqual('toothbrush');
    expect(result1.price).toBeCloseTo(20, 2);
    expect(result1.category).toEqual('tooth');
  });

  it('index method should return a list of products', async () => {
    const result = await stProduct.index();
    //console.log(typeof(result)) //gave me object
    expect(Array.isArray(result)).toBe(true);
  });

  it('show method should return the correct product', async () => {
    const result = await stProduct.show(1);
    expect(result.pname).toEqual('toothbrush');
    expect(result.price).toBeCloseTo(20, 2);
    expect(result.category).toEqual('tooth');
  });
});
