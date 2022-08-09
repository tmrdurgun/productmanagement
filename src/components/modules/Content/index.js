import React from 'react';
import styles from './style.module.scss';

function Content({ children }) {
  return (
    <div className={styles.content}>{children}</div>
  );
}

export default Content;