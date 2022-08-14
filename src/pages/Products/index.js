import React, { useState, useEffect, memo } from 'react';
import { ProductList, Loading } from '../../components';

import ProductService from '../../services/ProductService';

const productService = new ProductService();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 8;

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const productsResponse = await productService.getProductsPerPage(perPage, page);

    if (productsResponse.success) {
      // This timeout is only to show loading animation because localstorage too fast to get data from
      setTimeout(() => {
        setProducts(prev => [...prev, ...productsResponse.data]);
        setLoading(false);
      }, 1500);
    };
  };

  const handleScroll = () => {
    const windowInnerHeight = window.innerHeight;
    const scrollFromTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    if (windowInnerHeight + scrollFromTop + 1 >= scrollHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ProductList products={products} />
      {(loading && products.length > 0) && <Loading />}
    </>
  );
};

export default memo(Products);