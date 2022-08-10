import React, { useState, useContext } from 'react';

import { saveProduct } from '../../../store/actions';
import { Store } from '../../../store';

import styles from './style.module.scss';
import { ProductTypes } from '../../../common/enums/ProductEnum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';

export const ProductForm = () => {
  const { dispatch } = useContext(Store);

  const [productType, setProductType] = useState(ProductTypes.standart);

  const [newProduct, setNewProduct] = useState([{
    name: '',
    barcode: '',
    desc: '',
    type: productType
  }]);

  const [products, setProducts] = useState([]);


  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (barcode) => {
    setProducts(products.filter(item => item.barcode !== barcode));
  };

  const handleInputChange = (field) => (event) => {
    setNewProduct({ ...newProduct, [field]: event.target.value });
  };

  const handleSaveProduct = (event) => {
    event.preventDefault();
    saveProduct(products, dispatch);
    setProduct({
      name: '',
      barcode: '',
      desc: ''
    });
  };

  return (
    <>
      <div className={styles.formSection}>
        <h6 className="text-bold">Product Type</h6>
        <div>
          <button className="primary" onClick={() => setProductType(ProductTypes.onlineLicence)}>Online Licence</button>
          <button className="primary" onClick={() => setProductType(ProductTypes.standart)}>Standart</button>
        </div>
      </div>

      <form className={styles.productForm}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" value={newProduct.name} onChange={handleInputChange('name')} />
        </div>

        <div className={styles.inputGroup}>
          <label>Barcode</label>
          <input type="text" value={newProduct.barcode} onChange={handleInputChange('barcode')} />
        </div>

        <button className="primary" type="button" onClick={handleAddProduct}>Add</button>
      </form>

      <div className={styles.formSection}>
        <ul className="newProductsPreview">
          {
            products.map((productItem, i) => (
              <li key={`productItem-${i + 1}`}>
                <span>{`${productItem.name} - ${productItem.barcode}`}</span>
                <button onClick={() => handleRemoveProduct(productItem.barcode)}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
              </li>
            ))
          }
        </ul>
      </div>

      <form onSubmit={handleSaveProduct} className={styles.productForm}>

        <button className="primary" type="submit" onClick={handleAddProduct}>Submit</button>
      </form>
    </>
  );
};
