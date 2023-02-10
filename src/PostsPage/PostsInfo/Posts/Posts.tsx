import React from 'react';
import bloggerImg from './bloggerImg.svg';
import {Post} from './Post/Post';
import styles from '../../../BlogsPage/BlogsInfo/Blogs/Blog/Blog.module.css';
import {Link} from 'react-router-dom';

const Posts = () => {
    const posts = [
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'The best blog in our village',
            date: '12.12.2022',
            title: 'Let\'s fly into space'
        },
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'The best blog in our village',
            date: '12.12.2022',
            title: 'I\'m sitting at work'
        },
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'I sell cosmetics ',
            date: '12.12.2022',
            title: 'Let\'s fly into space'
        },
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'I\'m happy like a child',
            date: '12.12.2022',
            title: 'Let\'s fly into space'
        },
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'Cooking buns',
            date: '12.12.2022',
            title: 'I\'m sitting at work'
        },
        {
            id: '1',
            bloggerImg: bloggerImg,
            text: 'First day at the office',
            date: '12.12.2022',
            title: 'Let\'s fly into space'
        },
    ];
    return (
        <>
            {
                posts.map(post => {

                    return (<Link className={styles.linkStyle} to="/postContent">
                        <Post title={post.title} text={post.text} bloggerImg={post.bloggerImg} date={post.date}/>;
                    </Link>);


                })
            }

        </>
    );
};

export default Posts;