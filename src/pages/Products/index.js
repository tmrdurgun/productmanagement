import React, { useState, useEffect, memo, useContext } from 'react';
import { ProductList, Loading } from '../../components';

import ProductService from '../../services/ProductService';
import { Store } from '../../store';

const productService = new ProductService();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 8;
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    const productsResponse = await productService.getProductsPerPage(perPage, page);

    if (productsResponse.success) {
      // This timeout is only to show loading animation because localstorage too fast to get data from
      setTimeout(() => {
        // to retrieve updated page after delete action, filter previous list with updated context state
        setProducts(prev => [...prev.filter(prevItem => state.productList.find(item => item.id === prevItem.id)), ...productsResponse.data]);
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
  }, [page, state.productList]);

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