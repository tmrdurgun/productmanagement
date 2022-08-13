import React, { createContext, useReducer } from 'react';

import { reducer } from './reducers';

import ProductService from '../services/ProductService';
const productService = new ProductService();

const initialState = {
  productList: []
};

/*
  Module pattern helps to fill productList with encapsulation and self provoke ability
*/
(async () => {
  const products = await productService.getProducts();

  if (products) {
    initialState.productList = products.data;
  }
})();

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};