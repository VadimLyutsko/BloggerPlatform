import React from 'react';
import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {Error404} from './Error/Error404';
import {BlogsInfo} from './BlogsPage/BlogsInfo/BlogsInfo';
import {StartPage} from './StartPage';
import {PostsInfo} from './PostsPage/PostsInfo';
import {SpecificArticle} from './BlogsPage/BlogsInfo/SpecificArticle/SpecificArticle';
import {PostContent} from './PostsPage/PostContent/PostContent';

export const PATH = {
    START_PAGE: '/startPage',
    BLOGS: '/blogs',
    ARTICLE: '/articleContent',
    POSTS: '/posts',
    POST: '/postContent'
};

function App() {
    return (
        <div className={styles.wrapper}>

            <Routes>
                <Route path={PATH.START_PAGE} element={<StartPage/>}></Route>
                <Route path={PATH.BLOGS} element={<BlogsInfo/>}></Route>
                <Route path={PATH.POSTS} element={<PostsInfo/>}></Route>
                <Route path={PATH.ARTICLE} element={<SpecificArticle ArticleTitle={'Some title'}/>}></Route>
                <Route path={PATH.POST} element={<PostContent PostContentTitle={'Back-end blog'}/>}></Route>

                {/*<PostContent PostContentTitle={'Posts'}/>*/}

                <Route path={'/*'} element={<Error404/>}></Route>
            </Routes>
        </div>
    );
}


export default App;
