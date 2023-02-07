import React from 'react';
import styles from './Post.module.css';

export type PostPropsType = {
    id?: string
    bloggerImg?: string
    title?: string
    link?: string
    text: string
}

export const Post: React.FC<PostPropsType> = ({link, title, bloggerImg, text}) => {

    return (<>
        <div className={styles.post}>
            <div className={styles.bloggerImage}>
                <img src={bloggerImg} alt=""/>
            </div>
            <div className={styles.content}>

                <span className={styles.title}>{title}</span>
                <span className={styles.link}>  Website:  <a href={link}> {link}</a> </span>
                <span className={styles.text}>{text} </span>
            </div>

        </div>
        <hr/>
    </>
);
};

