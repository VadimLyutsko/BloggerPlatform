import React from 'react';
import styles from './Blogs.module.css';
import {SuperSearch} from '../SuperComponents/SuperSearch/SuperSearch';
import {SuperSort} from '../SuperComponents/SuperSort/SuperSort';

export const Blogs = () => {
    return (
        <main className={styles.blogs}>
            <h3>Blogs</h3>
            <div className={styles.SearchAndSortPanel}>
                <SuperSearch/>
                <SuperSort/>
            </div>
        </main>
    );
};

