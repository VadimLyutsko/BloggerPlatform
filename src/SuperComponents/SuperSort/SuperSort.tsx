import React from 'react';
import styles from './SuperSort.module.css'

export const SuperSort = () => {
    return (
        <div className={styles.sortSelect}>
            <select name="sort" >
                <option value="JS" >Old blogs first</option>
                <option value="Java">From A to Z</option>
                <option value="C#">From Z to A</option>
            </select>

        </div>
    );
};

