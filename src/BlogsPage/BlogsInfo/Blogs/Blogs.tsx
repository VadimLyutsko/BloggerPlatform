import React from 'react';
import {useSelector} from 'react-redux';
import {store} from '../../../state/store';
import {Blog} from './Blog/Blog';

export const Blogs = () => {
    let posts = useSelector(() => store.getState().posts);
    return (
        <>
            {
                posts.map(post => {
                   return <Blog title={post.title} text={post.text} bloggerImg={post.bloggerImg}
                                link={post.link}/>
                })
            }

        </>
    );
};

