import React from 'react';
import styles from './PostContent.module.css';
import {Link} from 'react-router-dom';
import {Header} from '../../Header/Header';
import {Navbar} from '../../NavBar/Navbar';
import Posts from '../PostsInfo/Posts/Posts';
import {ShowMoreButton} from '../../SuperComponents/SuperSort/Buttons/ShowMoreButton';
import {Blog} from '../../BlogsPage/BlogsInfo/Blogs/Blog/Blog';
import bloggerImg from './bloggerImg.svg';

type SpecificArticlePropsType = {
    PostContentTitle: string
}

export const PostContent: React.FC<SpecificArticlePropsType> = ({PostContentTitle}) => {
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

                <h3><Link className={styles.linkStyle} to="/posts">
                    Posts ▸
                </Link> <span className={styles.SpecificArticleTitle}>{PostContentTitle}</span></h3>

                <hr/>

                <Link className={styles.linkStyle} to="/posts">
                    <div className={styles.BackToBlogsPanel}>
                        <span>← </span>
                        <span style={{marginLeft: '5px'}}>Back to posts</span>
                    </div>
                </Link>
                {/*    Ниже какая-то картинка не понятно с переходом ли??*/}
                <Link className={styles.linkStyle} to="/posts">

                    <div className={styles.BackEndBlog}>
                        <span className={styles.BackEndBlogImage}>
                        <img src={blogInfoExample.bloggerImg} alt=""/>
                        </span>
                        <span style={{marginLeft: '5px'}}>Back to posts</span>
                    </div>
                </Link>

                <div className={styles.ContentDescription}>
                    <div><span className={styles.ContentDescriptionTitle}>First day at the office</span><span className={styles.foPublicPosts}>(for public posts)</span></div>
                    <div className={styles.ContentDescriptionDate}>12/12/2022 at 15:46:58</div>
                </div>

                <div className={styles.SpecificArticleImage}>
                    <img src="" alt=""/>
                </div>

                <div className={styles.postContentText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid consequatur dicta eos, fuga molestiae mollitia nisi provident quae, quam quis reiciendis sapiente sed sint sit tempora velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid consequatur dicta eos, fuga molestiae mollitia nisi provident quae, quam quis reiciendis sapiente sed sint sit tempora velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. <p>Accusamus ad aliquid consequatur dicta eos, fuga molestiae mollitia nisi provident quae, quam quis reiciendis sapiente sed sint sit tempora velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid consequatur dicta eos, fuga molestiae mollitia nisi provident quae, quam quis reiciendis sapiente sed sint sit tempora velit voluptates.</p>
                </div>


                {/*<ShowMoreButton title={'Show more 🡇'}/>*/}

            </main>
        </>
    );
};

