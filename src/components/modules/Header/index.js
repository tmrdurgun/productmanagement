import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logo}>hepsiburada</div>
      <nav>
        <ul>
          <li>
            <Link to={'/products'}>List</Link>
          </li>
          <li>
            <Link to={'/products/add'}>Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
