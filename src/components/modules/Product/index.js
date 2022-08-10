import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import { removeProduct } from '../../../store/actions';

import styles from './style.module.scss';

import { ProductTypesLabel } from '../../../common/enums/ProductEnum';

export const Product = memo(
  (props) => {
    const { product } = props;

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleRemoveProduct = () => {
      removeProduct(product.id, dispatch);
    };

    const handleCollapse = () => {
      setIsCollapsed(!isCollapsed);
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
              <div className="text-right">
                <p className="text-bold">Product Type</p>
                <p>{ProductTypesLabel[product.type]}</p>
              </div>

              <div className={styles.collapseActions}>
                <button onClick={handleRemoveProduct}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
                <button onClick={handleCollapse}><FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} size="lg" /></button>
              </div>
            </div>
          </div>
          <div className={`${styles.collapseBody} ${isCollapsed ? styles.collapsed : ''}`}>
            <p className="text-bold">Description:</p>
            <p>{product.desc}</p>
          </div>
        </div>


      </div>
    );
  }
);
