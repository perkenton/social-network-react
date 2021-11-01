import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className={ styles.sidebar }>
      <ul className={ styles.menuList }>

        <li className={ styles.menuListItem }>
          <NavLink to='/profile' className={ styles.menuListLink } activeClassName={ styles.menuListLink_active }>Profile</NavLink>
        </li>
        <li className={ styles.menuListItem }>
          <NavLink to='/dialogs' className={ styles.menuListLink } activeClassName={ styles.menuListLink_active }>Messages</NavLink>
        </li>
        <li className={ styles.menuListItem }>
          <NavLink to='/news' className={ styles.menuListLink } activeClassName={ styles.menuListLink_active }>News</NavLink>
        </li>
        <li className={ styles.menuListItem }>
          <NavLink to='/music' className={ styles.menuListLink } activeClassName={ styles.menuListLink_active }>Music</NavLink>
        </li>
        <li className={ styles.menuListItem }>
          <NavLink to='/setting' className={ styles.menuListLink } activeClassName={ styles.menuListLink_active }>Setting</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Sidebar;