import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.text}>
                <h1>Blogger Platform</h1>
            </span>
        </div>
    );
};

