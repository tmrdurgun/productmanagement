import ProductService from './ProductService';

const productService = new ProductService();

const createDummyData = () => {
  const data = [];
  for (let index = 1; index <= 24; index++) {
    data.push({ name: `Product ${index}` });
  }

  return data;
};

describe('PRODUCT SERVICE', () => {

  afterAll(() => {
    localStorage.clear();
  });

  test('saveProducts should work', async () => {
    const dummyData = createDummyData();
    await productService.saveProducts(dummyData);
    const products = await productService.getProducts();
    expect(products.data.length).toBe(dummyData.length);
  });

  test('getProductsPerPage should work', async () => {
    const productsPerPage = await productService.getProductsPerPage(8, 2);
    console.log('productsPerPage: ', productsPerPage);

    expect(productsPerPage).toBeDefined();
  });

});




