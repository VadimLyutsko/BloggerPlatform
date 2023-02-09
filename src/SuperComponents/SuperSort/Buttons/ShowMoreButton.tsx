import React from 'react';
import styles from './ShowMoreButton.module.css';

type ShowMoreButtonPropsType = {
    title: string
    showMoreText?: boolean
}

export const ShowMoreButton: React.FC<ShowMoreButtonPropsType> = ({title, showMoreText}) => {
    let lastClassName = showMoreText ? styles.showMoreTextButton : styles.showMorePageButton;
    return (
        <div className={lastClassName}>
            <button className={lastClassName}>{title}</button>
        </div>
    );
};

