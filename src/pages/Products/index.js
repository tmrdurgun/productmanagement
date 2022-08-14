import React, { useState, useEffect, useContext } from 'react';
import { ProductList } from '../../components';

import ProductService from '../../services/ProductService';
import { Store } from '../../store';

const productService = new ProductService();

function Products() {
  const [products, setProducts] = useState([]);
  const { state } = useContext(Store);

  const getProducts = async () => {
    const productsResponse = await productService.getProducts();
    setProducts(productsResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, [state.productList]);

  return (
    <ProductList products={products} />
  );
}

export default Products;