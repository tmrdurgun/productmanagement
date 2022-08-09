import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

import { removeProduct } from '../../../store/actions';

import styles from './style.module.scss';

export const Product = (props) => {
  const { productId, productText, dispatch } = props;

  const handleRemoveProduct = () => {
    removeProduct(productId, dispatch);
  };

  return (
    <div className={styles.product}>
      <span>
        {productText}
      </span>
      <button onClick={handleRemoveProduct}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
    </div>
  );
};
