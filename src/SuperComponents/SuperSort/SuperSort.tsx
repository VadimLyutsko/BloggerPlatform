import React from 'react';
import styles from './SuperSort.module.css';

type SuperSelectPropsType = {
    options: string[]
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({options}) => {
    return (
        <div className={styles.sortSelect}>
            <select name="sort">
                {options.map(o => {
                    return <option className={styles.option} value={o}>{o}</option>;
                })}
            </select>
        </div>
    );
};

