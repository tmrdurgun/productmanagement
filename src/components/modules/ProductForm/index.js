import React, { useState, useContext } from 'react';

import ProductService from '../../../services/ProductService';

import { Store } from '../../../store';

import { ProductTypes } from '../../../common/enums/ProductEnum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

import { saveProducts } from '../../../store/actions';

export const ProductForm = () => {
  const { dispatch } = useContext(Store);
  const productService = new ProductService();

  const [newProduct, setNewProduct] = useState({
    name: '',
    barcode: '',
    licence: '',
    desc: '',
    type: ProductTypes.standart,
  });

  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
  };

  const handleChangeProductDetails = (index, field, val) => {
    setProducts(products.map((item, i) => {
      if (i === index) item[field] = val;
      return item;
    }));
  };

  const handleRemoveProduct = (barcode) => {
    setProducts(products.filter(item => item.barcode !== barcode));
  };

  const handleInputChange = (field, val) => {
    setNewProduct({ ...newProduct, [field]: val });
  };

  const resetForm = () => {
    setNewProduct({
      name: '',
      barcode: '',
      licence: '',
      desc: '',
      type: ProductTypes.standart
    });

    setProducts([]);
  };

  const handleSaveProduct = async (event) => {
    event.preventDefault();

    const saveProductsResponse = await productService.saveProducts(products);

    if (saveProductsResponse.success) {
      const savedProducts = await productService.getProducts();
      saveProducts(savedProducts.data, dispatch);
      resetForm();
    }

  };

  return (
    <>
      <div className={styles.formSection}>
        <h6 className="text-bold">Product Type</h6>
        <div>
          <button className="primary" onClick={() => handleInputChange('type', ProductTypes.onlineLicence)}>Online Licence</button>
          <button className="primary" onClick={() => handleInputChange('type', ProductTypes.standart)}>Standart</button>
        </div>
      </div>

      <form className={styles.productForm}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" value={newProduct.name} onChange={(e) => handleInputChange('name', e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label>Barcode</label>
          <input type="text" value={newProduct.barcode} onChange={(e) => handleInputChange('barcode', e.target.value)} />
        </div>

        <button className="primary" type="button" onClick={handleAddProduct}>Add</button>
      </form>

      <div className={styles.formSection}>
        <h6 className="text-bold">Products</h6>
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

      <form onSubmit={(e) => handleSaveProduct(e)} className={styles.productForm}>
        <h6 className="text-bold mb-15">Product Details</h6>
        <ul>
          {
            products.map((productItemDetail, i) => (
              <li key={`productItemDetail-${i + 1}`} className="mb-30">
                <p>Name: {productItemDetail.name}</p>
                <p>Barcode: {productItemDetail.barcode}</p>
                {productItemDetail.type === ProductTypes.onlineLicence && <div className={styles.inputGroup}>
                  <label>Licence Code:</label>
                  <input type="text" value={productItemDetail.licenceCode} onChange={(e) => handleChangeProductDetails(i, 'licenceCode', e.target.value)} />
                </div>}
                <div className={styles.inputGroup}>
                  <label>Description {productItemDetail.type === ProductTypes.onlineLicence ? '(optional)' : '(required)'}:</label>
                  <textarea value={productItemDetail.desc} onChange={(e) => handleChangeProductDetails(i, 'desc', e.target.value)}></textarea>
                </div>
              </li>
            ))
          }
        </ul>
        <button className="primary" type="submit">Submit</button>
      </form>
    </>
  );
};
