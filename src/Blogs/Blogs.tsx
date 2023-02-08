import React from 'react';
import styles from './Blogs.module.css';
import {SuperSearch} from '../SuperComponents/SuperSearch/SuperSearch';
import {SuperSelect} from '../SuperComponents/SuperSort/SuperSort';
import {Posts} from '../Posts/Posts';

export const Blogs = () => {
    const options = ['Old blogs first', 'From A to Z', 'From Z to A'];
    return (
        <main className={styles.blogs}>
            <h3>Blogs</h3>
            <hr/>
            <div className={styles.SearchAndSortPanel}>
                <SuperSearch/>
                <SuperSelect options={options}/>
            </div>
            <Posts/>
            <div>
                <button className={styles.showMoreButton}>Show more 🡇</button>
            </div>
        </main>
    );
};

