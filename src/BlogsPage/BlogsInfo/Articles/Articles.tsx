import React from 'react';
import {useSelector} from 'react-redux';
import {store} from '../../../state/store';
import {Article} from './Article/Article';

export const Articles = () => {
    let posts = useSelector(() => store.getState().posts);
    return (
        <>
            {
                posts.map(post => {
                   return <Article title={post.title} text={post.text} bloggerImg={post.bloggerImg}
                                   link={post.link}/>
                })
            }

        </>
    );
};

