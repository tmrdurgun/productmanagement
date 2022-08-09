import React from 'react';

import styles from './style.module.scss';

export const Input = (props) => <input type="text" onChange={props.onChange} className={styles.textInput} />;
