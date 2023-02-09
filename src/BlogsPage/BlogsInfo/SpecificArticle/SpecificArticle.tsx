import React from 'react';
import styles from './SpecificArticle.module.css';
import {Header} from '../../../Header/Header';
import {Navbar} from '../../../NavBar/Navbar';
import {Blog} from '../Blogs/Blog/Blog';
import bloggerImg from '../../../PostsPage/Posts/Post/bloggerImg.svg';
import {ShowMoreButton} from '../../../SuperComponents/SuperSort/Buttons/ShowMoreButton';
import Posts from '../../../PostsPage/Posts/Posts';

type SpecificArticlePropsType = {
    ArticleTitle: string
}

export const SpecificArticle: React.FC<SpecificArticlePropsType> = ({ArticleTitle}) => {
    const blogInfoExample = {
        id: '3',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'Audience Platform'
    };

    return (
        <>
            <Header/>
            <Navbar/>
            <main className={styles.blogs}>
                <h3>Blogs ▸ <span className={styles.SpecificArticleTitle}>{ArticleTitle}</span></h3>
                <hr/>

                <div className={styles.BackToBlogsPanel}>
                    <span>← </span>
                    <span style={{marginLeft: '5px'}}>Back to blogs</span>
                </div>

                <div className={styles.SpecificArticleImage}>
                    <img src="" alt=""/>
                </div>

                <Blog showMoreButton={true} text={blogInfoExample.text} link={blogInfoExample.link}
                      id={blogInfoExample.id}
                      bloggerImg={blogInfoExample.bloggerImg} title={blogInfoExample.title}/>

                <Posts/>

                <ShowMoreButton title={'Show more 🡇'}/>


            </main>
        </>
    );
};

