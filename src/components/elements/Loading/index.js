import React from 'react';

import styles from './style.module.scss';

function Loading() {
    return (
        <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loading;