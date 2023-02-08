import React from 'react';
import {Post} from './Post/Post';
import bloggerImg from './Post/bloggerImg.svg';

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
                    return <Post title={post.title} text={post.text} bloggerImg={post.bloggerImg} date={post.date}/>;
                })
            }

        </>
    );
};

export default Posts;