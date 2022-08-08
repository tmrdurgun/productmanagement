import React, { useContext } from 'react';

import { Store } from '../../store/Store';
import Product from '../Product';
import styles from "./style.module.scss";


export const ProductList = () => {
    const { state, dispatch } = useContext(Store);

    const productList = state.productList.map((product) => (
        <Product
            key={product.id}
            productId={product.id}
            productText={product.text}
            productTag={product.tag}
            dispatch={dispatch}
        />
    ));

    return <div className={styles.productList}>{productList}</div>;
};