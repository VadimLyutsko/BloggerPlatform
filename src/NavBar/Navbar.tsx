import React from 'react';
import styles from './Navbar.module.css';
import {Link, NavLink} from 'react-router-dom';
import {PostContent} from '../PostsPage/PostContent/PostContent';


export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>

                <NavLink
                    className={({isActive}) => (isActive ? styles.linkIsActiveStyle : styles.linkStyle)}
                    to="/blogs">
                    <li className={styles.navbar__list__item__blogs}> Blogs</li>
                </NavLink>


                <NavLink
                    className={({isActive}) => (isActive ? styles.linkIsActiveStyle : styles.linkStyle)}
                    to="/posts">
                    <li className={styles.navbar__list__item__posts}>Posts</li>
                </NavLink>

            </ul>
        </nav>
    );
};

