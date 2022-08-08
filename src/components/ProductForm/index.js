import React, { useState, useContext } from 'react';

import { addProduct } from '../../actions';
import { Store } from '../../store/Store';

import styles from './style.module.scss';

const ProductForm = () => {
    const { dispatch } = useContext(Store);
    const [product, setProduct] = useState('');

    const handleProductInput = (event) => {
        setProduct(event.target.value)
    };

    const handleProductSubmit = (event) => {
        event.preventDefault();
        product.trim().length > 0 && addProduct(product, dispatch);
        setProduct('');
    };

    return (
        <form onSubmit={handleProductSubmit} className={styles.productForm}>
            <input type="text" value={product} onChange={handleProductInput} />
            <button type="submit">Add Product</button>
        </form>
    )
};

export default ProductForm;