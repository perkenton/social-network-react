import React from 'react';
import mainLogo from "../../images/main-logo-2.svg";
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <a href="./" className="header__logo-link"><img src={ mainLogo } alt="Logo" className="header__logo" /></a>
    </header>
  );
}

export default Header;