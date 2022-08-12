import React, { useState, useEffect, useContext } from 'react';

import { Product } from '../../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

import ProductService from '../../../services/ProductService';
import { Store } from '../../../store';

const productService = new ProductService();

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { state } = useContext(Store);

  const getProducts = async () => {
    const productsResponse = await productService.getProducts();
    setProducts(productsResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, [state.productList]);

  const productList = products?.map((product) => (
    <Product
      key={product.id}
      product={product}
    />
  ));

  return (
    <>
      {products && <div className={styles.productList}>{productList}</div>}
      {!products && <h3 className="text-center text-bold">No Products To Display <FontAwesomeIcon icon={faFrown} size="lg" /></h3>}
    </>
  );
};