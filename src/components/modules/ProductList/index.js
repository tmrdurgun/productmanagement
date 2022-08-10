import React, { useContext } from 'react';

import { Store } from '../../../store';
import { Product } from '../../../components';
import styles from './style.module.scss';


export const ProductList = () => {
  const { state, dispatch } = useContext(Store);

  const productList = state.productList.map((product) => (
    <Product
      key={product.id}
      product={product}
      dispatch={dispatch}
    />
  ));

  return <div className={styles.productList}>{productList}</div>;
};