import React from 'react';
import styles from './SuperSearch.module.css';

export const SuperSearch = () => {
    return (
        <div className={styles.SuperSearch}>
            <input type="text" placeholder={'🔍' + ' ' + 'Search'}/>
        </div>
    );
};

