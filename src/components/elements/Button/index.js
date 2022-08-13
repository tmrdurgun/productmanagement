import React from 'react';

import styles from './style.module.scss';

export const Button = ({ label, type, onClick, children, className, isActive }) => (
  <button className={`${className || ''} ${styles.buttonPrimary} ${isActive && styles.buttonPrimaryActive}`} type={type || 'button'} onClick={onClick}>{label} {children}</button>
);
