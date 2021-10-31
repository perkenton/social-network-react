import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className={ styles.sidebar }>
      <ul className={ styles.sidebar__list }>

        <li className={ styles.sidebar__listItem }>
          <NavLink to="/profile" className={ styles.sidebar__listLink } activeClassName={ styles.sidebar__listLink_active }>Profile</NavLink>
        </li>
        <li className={ styles.sidebar__listItem }>
          <NavLink to="/dialogs" className={ styles.sidebar__listLink } activeClassName={ styles.sidebar__listLink_active }>Messages</NavLink>
        </li>
        <li className={ styles.sidebar__listItem }>
          <NavLink to="/news" className={ styles.sidebar__listLink } activeClassName={ styles.sidebar__listLink_active }>News</NavLink>
        </li>
        <li className={ styles.sidebar__listItem }>
          <NavLink to="/music" className={ styles.sidebar__listLink } activeClassName={ styles.sidebar__listLink_active }>Music</NavLink>
        </li>
        <li className={ styles.sidebar__listItem }>
          <NavLink to="/setting" className={ styles.sidebar__listLink } activeClassName={ styles.sidebar__listLink_active }>Setting</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Sidebar;