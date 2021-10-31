import React from 'react';
import mainLogo from '../../images/main-logo-2.svg';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={ styles.header }>
      <a href="./" className={ styles.header__logoLink }>
      <img src={ mainLogo } alt="Logo" className={ styles.header__logo } />
      </a>
    </header>
  );
}

export default Header;