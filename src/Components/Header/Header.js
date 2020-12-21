import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    

    return (
        <div className='header'> 
            <h1 className='h1'>FR.COM</h1>
            <h5 className='h5'>Our Course</h5>
            <a className='log' href="./login">log in</a>
            <a className='sign' href="./login">sign up</a>
        </div>
    );
};

export default Header;