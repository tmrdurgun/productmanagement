import React, { useState, useEffect, memo, useContext } from 'react';
import { ProductList, Loading } from '../../components';

import ProductService from '../../services/ProductService';
import { Store } from '../../store';

const productService = new ProductService();

/*
  Lazy load & infinit scroll works fine with enough items as page size starter but runs into data sync issues after remove action so disabled until fixed
*/
const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 8;
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    // const productsResponse = await productService.getProductsPerPage(perPage, page);
    const productsResponse = await productService.getProducts();
    if (productsResponse.success) {
      setProducts(productsResponse.data);
      setLoading(false);
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

  /* useEffect(() => {
    getProducts();
  }, [page, state.productList]); */

  useEffect(() => {
    getProducts();
  }, [state.productList]);

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