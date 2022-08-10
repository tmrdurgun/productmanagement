import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';

import { removeProduct } from '../../../store/actions';

import styles from './style.module.scss';

import { ProductTypesLabel } from '../../../common/enums/ProductEnum';

export const Product = memo(
  (props) => {
    const { product } = props;

    const [collapsed, setCollapsed] = useState(true);

    const handleRemoveProduct = () => {
      removeProduct(product.id, dispatch);
    };

    const handleCollapse = () => {
      setCollapsed(!collapsed);
    };

    return (
      <div className={`${styles.product} mb-15`}>
        <div className={styles.collapse}>
          <div className={styles.collapseHeader}>

            <div className={styles.collapseTitleContainer}>
              <div className={styles.productName}>{product.name}</div>
              <div>
                <p>Number: {product.barcode}</p>
                <p>Created Date: {product.createdAt}</p>
              </div>
            </div>

            <div className={styles.collapseActionsContainer}>
              <div>
                <p>Product Type</p>
                <p>{ProductTypesLabel[product.type]}</p>
              </div>

              <div className={styles.collapseActions}>
                <button onClick={handleRemoveProduct}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
                <button onClick={handleCollapse}><FontAwesomeIcon icon={faChevronCircleDown} size="lg" /></button>
              </div>
            </div>
          </div>
          <div className={styles.collapseBody}>

          </div>
        </div>


      </div>
    );
  }
);
