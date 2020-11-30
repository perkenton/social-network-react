import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">

        <li className="sidebar__list-item">
          <NavLink to="/profile" className="sidebar__list-link" activeClassName="sidebar__list-link_active">Profile</NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/dialogs" className="sidebar__list-link" activeClassName="sidebar__list-link_active">Messages</NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/news" className="sidebar__list-link" activeClassName="sidebar__list-link_active">News</NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/music" className="sidebar__list-link" activeClassName="sidebar__list-link_active">Music</NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/setting" className="sidebar__list-link" activeClassName="sidebar__list-link_active">Setting</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Sidebar;