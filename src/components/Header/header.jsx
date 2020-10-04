import React from 'react';
import s from './header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="./logo.svg" />
    </header>
}

export default Header;