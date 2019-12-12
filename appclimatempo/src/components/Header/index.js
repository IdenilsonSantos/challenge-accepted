import React from 'react';
import Logo from '../../images/logo-white.png'

import "./style.css";

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="logo-box">
                <img className="logo" src={Logo} alt=""/>
            </div>
        </div>
    </header>
  );
}

export default Header;
