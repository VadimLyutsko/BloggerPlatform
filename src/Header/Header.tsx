import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.text}>
                <Link className={styles.logoLinkStyle} to="/startPage">
                    <h1>Blogger Platform</h1>
                </Link>
            </span>
        </div>
    );
};

