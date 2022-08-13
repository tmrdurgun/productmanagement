import React from 'react';

import styles from './style.module.scss';

export const TextArea = ({
  label,
  value,
  onChange
}) => (
  <div className={styles.textArea}>
    {label && <label>{label}</label>}
    <textarea type="text" value={value} onChange={onChange}></textarea>
  </div>
);
