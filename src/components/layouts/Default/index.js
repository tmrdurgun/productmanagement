import React from 'react';
import Header from '../../modules/Header';
import Content from '../../modules/Content';
import styles from './style.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <Content children={children} />
        </div>
    )
}

export default DefaultLayout;