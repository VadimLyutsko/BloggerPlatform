import React from 'react';
import styles from './Blogs.module.css';
import {SuperSearch} from '../SuperComponents/SuperSearch/SuperSearch';
import {SuperSort} from '../SuperComponents/SuperSort/SuperSort';
import {Posts} from '../Posts/Posts';

export const Blogs = () => {
    return (
        <main className={styles.blogs}>
            <h3>Blogs</h3>
            <hr/>
            <div className={styles.SearchAndSortPanel}>
                <SuperSearch/>
                <SuperSort/>
            </div>
            <Posts/>
        </main>
    );
};

