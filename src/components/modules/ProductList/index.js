import React, { useState, useEffect } from 'react';

import { Product } from '../../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

import ProductService from '../../../services/ProductService';

export const ProductList = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const productService = new ProductService();

    const productsResponse = await productService.getProducts();
    setProducts(productsResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('products: ', products);

  const productList = products?.map((product) => (
    <Product
      key={product.id}
      product={product}
    />
  ));

  return (
    <>
      {productList && <div className={styles.productList}>{productList}</div>}
      {!productList && <h3 className="text-center text-bold">No Products To Display <FontAwesomeIcon icon={faFrown} size="lg" /></h3>}
    </>
  );
};