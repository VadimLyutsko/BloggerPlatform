import React from 'react';
import styles from './PostsInfo.module.css';
import {SuperSelect} from '../SuperComponents/SuperSort/SuperSort';
import {Header} from '../Header/Header';
import {Navbar} from '../NavBar/Navbar';
import Posts from './Posts/Posts';
import {ShowMoreButton} from '../SuperComponents/SuperSort/Buttons/ShowMoreButton';


export const PostsInfo = () => {
    const options = ['New posts first', 'Old posts first'];
    return (<>
            <Header/>
            <Navbar/>
            <main className={styles.blogs}>
                <h3>Posts</h3>
                <hr/>
                <div className={styles.SearchAndSortPanel}>
                    <SuperSelect options={options}/></div>
                {/*</div>*/}
                {/*<Blogs/>*/}
                {/*<div>*/}

                <Posts/>

                <ShowMoreButton title={'Show more 🡇'}/>

            </main>
        </>

    );
};

