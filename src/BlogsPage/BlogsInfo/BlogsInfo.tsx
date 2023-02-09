import React from 'react';
import styles from './BlogsInfo.module.css';
import {SuperSearch} from '../../SuperComponents/SuperSearch/SuperSearch';
import {SuperSelect} from '../../SuperComponents/SuperSort/SuperSort';
import {Blogs} from './Blogs/Blogs';
import {Header} from '../../Header/Header';
import {Navbar} from '../../NavBar/Navbar';
import {ShowMoreButton} from '../../SuperComponents/SuperSort/Buttons/ShowMoreButton';

export const BlogsInfo = () => {
    const options = ['Old blogs first', 'From A to Z', 'From Z to A'];
    return (<>
            <Header/>
            <Navbar/>
        <main className={styles.blogs}>
            <h3>Blogs</h3>
            <hr/>
            <div className={styles.SearchAndSortPanel}>
                <SuperSearch/>
                <SuperSelect options={options}/>
            </div>
            <Blogs/>

            <ShowMoreButton title={'Show more '}/>

        </main>
    </>

    );
};

