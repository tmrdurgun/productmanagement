import React, { useEffect } from 'react';
import ProductService from '../../../services/ProductService';
import { ProductForm } from '../../../components';

function AddProduct() {
  const productService = new ProductService();

  async function handleAddProduct(product) {
    const saveProduct = await productService.saveProduct(product);

    // console.log('saveProduct: ', saveProduct);
  }

  async function handleRemoveProducts() {
    const removeProducts = await productService.removeProducts();

    // console.log('removeProducts: ', removeProducts);
  }

  useEffect(() => {
    handleAddProduct({
      id: 'asd',
      name: 'PRODUCT 1'
    });

    handleRemoveProducts();
  }, []);


  return (
    <ProductForm />
  );
}

export default AddProduct;