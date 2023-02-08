import React from 'react';
import styles from './PostsInfo.module.css';
import {SuperSelect} from '../SuperComponents/SuperSort/SuperSort';
import {Header} from '../Header/Header';
import {Navbar} from '../NavBar/Navbar';
import Posts from './Posts/Posts';


export const PostsInfo = () => {
    const options = ['Old blogs first', 'From A to Z', 'From Z to A'];
    return (<>
            <Header/>
            <Navbar/>
            <main className={styles.blogs}>
                <h3>Posts</h3>
                <hr/>
                <div className={styles.SearchAndSortPanel}>
                    <SuperSelect options={options}/></div>
                {/*</div>*/}
                {/*<Articles/>*/}
                {/*<div>*/}

                <Posts/>

                    <button className={styles.showMoreButton}>Show more 🡇</button>

            </main>
        </>

    );
};

