import LocalStorageService from './LocalStorageService';

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

  async addProduct(product) {
    try {
      const products = await this.getProducts();
      const result = await this.localStorageService.set('PRODUCTS', [...products, product]);

      if (!result) throw new Error('Ürün eklenemedi!');

      return {
        success: true,
        message: 'Ürün eklendi!'
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
      const result = await this.localStorageService.set('PRODUCTS', products.filter(item => item.id === id));

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

  async removeProducts() {
    try {
      const result = await this.localStorageService.delete('PRODUCTS');

      if (result) throw new Error('Ürünler silinemedi!');

      return {
        success: true,
        message: 'Ürünler silindi!'
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