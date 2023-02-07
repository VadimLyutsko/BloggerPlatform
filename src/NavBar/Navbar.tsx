import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__list__item__blogs}>Blogs</li>
                <li className={styles.navbar__list__item__posts}>Posts</li>
            </ul>
        </nav>
    );
};

