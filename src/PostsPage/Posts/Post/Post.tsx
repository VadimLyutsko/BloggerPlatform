import React from 'react';
import styles from './Post.module.css';

export type PostPropsType = {
    id?: string
    bloggerImg?: string
    title?: string
    date?: string
    text: string
}

export const Post: React.FC<PostPropsType> = ({date, title, bloggerImg, text}) => {
    return (
        <div className={styles.post}>

            <div className={styles.postLogoImage}>
                <img src={bloggerImg} alt=""/>
            </div>

            <div className={styles.infoUnderImage}>

                <div className={styles.bloggerImage}>
                    <img src={bloggerImg} alt=""/>
                </div>

                <div className={styles.content}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.text}>{text} </span>
                    <span className={styles.link}>  {date} </span>
                </div>

            </div>
        </div>
    );
};

