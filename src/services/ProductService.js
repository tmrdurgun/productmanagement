import LocalStorageService from './LocalStorageService';
import { generateId } from '../utils';

class ProductService {
  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  async getProducts() {
    try {
      const products = await this.localStorageService.get('PRODUCTS');

      if (!products) throw new Error('Listelenecek ürün bulunamadı!');

      return {
        success: true,
        data: JSON.parse(products)
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  async saveProducts(products) {
    try {
      const productList = products.map(item => {
        item.id = generateId();
        item.createdAt = new Date();
        return item;
      });

      const prevProducts = await this.getProducts('PRODUCTS');
      const result = await this.localStorageService.set('PRODUCTS', prevProducts.success ? prevProducts.data.concat(productList) : productList);

      if (!result) throw new Error('Saving products have failed!');

      return {
        success: true,
        message: 'New products added!'
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  async removeProduct(id) {
    try {
      const products = await this.getProducts();

      await this.localStorageService.set('PRODUCTS', products.data.filter(item => item.id !== id));

      const productsAfterRemove = await this.getProducts();
      const result = productsAfterRemove.data.find(item => item.id === id);

      if (result) throw new Error('Ürün silinemedi!');

      return {
        success: true,
        message: 'Ürün silindi!'
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

}

export default ProductService;