import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DevFlix logo"/>
            </a>
        </nav>
    );
}

export default Menu;