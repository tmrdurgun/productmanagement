import React from 'react';

import { Product, Loading } from '../../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';



export const ProductList = ({ products }) => {

  /* 
    The factory pattern allows to factor out the process of object creation. This can have multiple purpose:

    - the final object depends on the parameters.
    - separate a simple object representation from the logic of creating it.
  */
  const renderFactory = () => {
    if (products.length > 0) {
      return (
        <div className={styles.productList}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              collapsed
            />
          ))}
          <Loading />
        </div>
      );
    }

    return <h3 className="text-center text-bold">No Products To Display <FontAwesomeIcon icon={faFrown} size="lg" /></h3>;
  };

  return (<>{renderFactory()}</>);
};