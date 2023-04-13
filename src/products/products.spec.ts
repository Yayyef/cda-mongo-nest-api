import { Products } from './products.schema';

describe('Products', () => {
  it('should be defined', () => {
    expect(new Products()).toBeDefined();
  });
});
