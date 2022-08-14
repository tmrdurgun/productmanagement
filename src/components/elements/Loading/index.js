import React from 'react';

import styles from './style.module.scss';

export const Loading = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
