import React from 'react';

import styles from './style.module.scss';

function Input(props) {
  return (
    <input type="text" onChange={props.onChange} className={styles.textInput} />
  );
}

export default Input;