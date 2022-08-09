import React from 'react';
import {
  Header,
  Content
} from '../../../components';
import styles from './style.module.scss';

export const DefaultLayout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <Content>{children}</Content>
  </div>
);
