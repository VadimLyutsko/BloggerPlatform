import React from 'react';
import styles from './App.module.css';
import {Header} from './Header/Header';
import {Navbar} from './NavBar/Navbar';

function App() {
    return (<div className={styles.wrapper}>
            <Header/>
            <Navbar/>
        </div>
    );
}

export default App;
