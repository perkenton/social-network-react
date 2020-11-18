import React from 'react';
import './sidebar/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list-item"><a href="#" className="sidebar__list-link">Profile</a></li>
        <li className="sidebar__list-item"><a href="#" className="sidebar__list-link">Messages</a></li>
        <li className="sidebar__list-item"><a href="#" className="sidebar__list-link">News</a></li>
        <li className="sidebar__list-item"><a href="#" className="sidebar__list-link">Music</a></li>
        <li className="sidebar__list-item"><a href="#" className="sidebar__list-link">Setting</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;