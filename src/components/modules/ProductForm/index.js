import React, { useState, useContext } from 'react';

import { addProduct } from '../../../store/actions';
import { Store } from '../../../store';

import styles from './style.module.scss';

export const ProductForm = () => {
  const { dispatch } = useContext(Store);
  const [product, setProduct] = useState({
    name: '',
    barcode: '',
    desc: ''
  });

  const handleInputChange = (field) => (event) => {
    setProduct({ ...product, [field]: event.target.value });
  };

  const handleProductSubmit = (event) => {
    event.preventDefault();
    addProduct(product, dispatch);
    setProduct({
      name: '',
      barcode: '',
      desc: ''
    });
  };

  return (
    <form onSubmit={handleProductSubmit} className={styles.productForm}>
      <input type="text" value={product.name} onChange={handleInputChange('name')} />
      <button type="submit">Add Product</button>
    </form>
  );
};
