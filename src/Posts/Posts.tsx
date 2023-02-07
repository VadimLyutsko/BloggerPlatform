import React from 'react';
import {useSelector} from 'react-redux';
import {store} from '../state/store';
import {Post} from './Post/Post';

export const Posts = () => {
    let posts = useSelector(() => store.getState().posts);
    console.log(posts.map(p=>p.id));
    return (
        <>
            {
                posts.map(post => {
                   return <Post title={post.title} text={post.text} bloggerImg={post.bloggerImg}
                          link={post.link}/>
                })
            }
        </>
    );
};

