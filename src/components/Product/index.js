import React, { memo } from 'react';
import { FontAwesomeIcon } from 'react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import { removeProduct } from '../../actions';

import styles from './style.module.scss';

const Product = memo(
    (props) => {
        const { productId, productText, dispatch } = props;

        const handleRemoveProduct = () => {
            removeProduct(productId, dispatch)
        };

        return (
            <div className={styles.product}>
                <span>
                    {productText}
                </span>
                <button onClick={handleRemoveProduct}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
            </div>
        )
    }
);

export default Product;