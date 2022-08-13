import React, { useState, useContext } from 'react';

import ProductService from '../../../services/ProductService';

import { Store } from '../../../store';

import { ProductTypes } from '../../../common/enums/ProductEnum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

import { saveProducts } from '../../../store/actions';

import { Input, TextArea, Button } from '../../../components';

const productService = new ProductService();

export const ProductForm = () => {
  const { dispatch } = useContext(Store);

  const [newProduct, setNewProduct] = useState({
    name: '',
    barcode: '',
    licenceCode: '',
    desc: '',
    type: ProductTypes.standart,
  });

  const [products, setProducts] = useState([]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    setProducts([...products, newProduct]);
  };

  const handleChangeProductDetails = (index, field, val) => {
    setProducts(products.map((item, i) => {
      if (i === index) item[field] = val;
      return item;
    }));
  };

  const handleRemoveProduct = (index) => {
    setProducts(products.filter((item, i) => i !== index));
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
        <h6 className="text-bold mb-15">Product Type</h6>
        <div>
          <Button
            label="Online Licence"
            className="mr-15"
            isActive={newProduct.type === ProductTypes.onlineLicence}
            onClick={() => handleInputChange('type', ProductTypes.onlineLicence)}
          />

          <Button
            label="Standart"
            isActive={newProduct.type === ProductTypes.standart}
            onClick={() => handleInputChange('type', ProductTypes.standart)}
          />
        </div>
      </div>

      <form onSubmit={(e) => handleAddProduct(e)} className={`${styles.productForm} ${styles.formSection}`}>
        <h6 className="text-bold mb-15">Add Product</h6>

        <Input label="Name" className="anan" value={newProduct.name} onChange={(e) => handleInputChange('name', e.target.value)} />

        <Input label="Barcode" value={newProduct.barcode} onChange={(e) => handleInputChange('barcode', e.target.value)} />

        <Button type="submit" label="Add" />
      </form>

      {products.length > 0 && <div className={styles.formSection}>
        <h6 className="text-bold mb-15">Products</h6>
        <ul className={styles.newProductsPreview}>
          {
            products.map((productItem, i) => (
              <li key={`productItem-${i + 1}`} className="mb-15">
                <span>{`${productItem.name} - ${productItem.barcode}`}</span>
                <a href="javascript:void(0)" onClick={() => handleRemoveProduct(i)}><FontAwesomeIcon icon={faTrash} size="sm" /></a>
              </li>
            ))
          }
        </ul>
      </div>}

      {products.length > 0 && <form onSubmit={(e) => handleSaveProduct(e)} className={styles.productForm}>
        <h6 className="text-bold mb-15">Product Details</h6>
        <ul>
          {
            products.map((productItemDetail, i) => (
              <li key={`productItemDetail-${i + 1}`} className="mb-30">
                <p>Name: {productItemDetail.name}</p>
                <p>Barcode: {productItemDetail.barcode}</p>
                {productItemDetail.type === ProductTypes.onlineLicence &&
                  <Input label="Licence Code:" value={productItemDetail.licenceCode} onChange={(e) => handleChangeProductDetails(i, 'licenceCode', e.target.value)} />}

                <TextArea label={`Description ${productItemDetail.type === ProductTypes.onlineLicence ? '(optional)' : '(required)'}`} value={productItemDetail.desc} onChange={(e) => handleChangeProductDetails(i, 'desc', e.target.value)} />

              </li>
            ))
          }
        </ul>

        <Button type="submit" label="Submit" />

      </form>}
    </>
  );

};
