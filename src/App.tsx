import React from 'react';
import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {StartPageBlogs} from './Blogs/StartPageBlogs';
import {Error404} from './Error/Error404';

export const PATH = {
    BLOGS: '/blogs',
    POSTS: '/posts'
};

function App() {
    return (<div className={styles.wrapper}>

            <Routes>
                <Route path={PATH.BLOGS} element={<StartPageBlogs/>}></Route>

                <Route path={'/*'} element={<Error404/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
