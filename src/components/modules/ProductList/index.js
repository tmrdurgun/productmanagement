import React, { memo } from 'react';

import { Product } from '../../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

const ProductList = ({ products }) => {

  /* 
    The factory pattern allows to factor out the process of object creation. This can have multiple purpose:

    - the final object depends on the parameters.
    - separate a simple object representation from the logic of creating it.
  */
  const renderFactory = () => {
    if (products && products.length > 0) {
      return (
        <div className={styles.productList}>
          {products.map((product, index) => (
            <Product
              key={index + 1}
              product={product}
              collapsed
            />
          ))}
        </div>
      );
    }

    return <h3 className="text-center text-bold mb-30">No Products To Display <FontAwesomeIcon icon={faFrown} size="lg" /></h3>;
  };

  return (<>{renderFactory()}</>);
};

export const MemoizedProductList = memo(ProductList);