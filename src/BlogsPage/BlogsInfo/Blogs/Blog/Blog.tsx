import React from 'react';
import styles from './Blog.module.css';
import {ShowMoreButton} from '../../../../SuperComponents/SuperSort/Buttons/ShowMoreButton';
import {Link} from 'react-router-dom';

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

                <Link className={styles.linkStyle} to="/article">
                    <span className={styles.title}>{title}</span>
                </Link>
                <span className={styles.link}>  Website:  <a href={link}> {link}</a> </span>
                <span className={styles.text}>{text} </span>
            </div>

        </div>

            {showMoreButton&& <ShowMoreButton showMoreText={true} title={'Show more ˅'}/>}
        <hr/>
    </>
);
};

