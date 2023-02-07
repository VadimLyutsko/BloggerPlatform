import React from 'react';
import styles from './App.module.css';
import {Header} from './Header/Header';
import {Navbar} from './NavBar/Navbar';
import {Blogs} from './Blogs/Blogs';

function App() {
    return (<div className={styles.wrapper}>
            <Header/>
            <Navbar/>
            <Blogs/>
        </div>
    );
}

export default App;
