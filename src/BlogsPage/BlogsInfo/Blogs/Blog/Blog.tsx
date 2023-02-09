import React from 'react';
import styles from './Blog.module.css';
import {ShowMoreButton} from '../../../../SuperComponents/SuperSort/Buttons/ShowMoreButton';

export type PostPropsType = {
    id?: string
    bloggerImg?: string
    title?: string
    link?: string
    text: string
    showMoreButton?:boolean
}

export const Blog: React.FC<PostPropsType> = ({link, title, bloggerImg, text,  showMoreButton }) => {

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

            {showMoreButton&& <ShowMoreButton showMoreText={true} title={'Show more ˅'}/>}
        <hr/>
    </>
);
};

