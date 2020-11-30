import React from 'react';
import './DialogItem.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <li className="dialogs__list-item">
      <NavLink className="dialogs__list-link" activeClassName="dialogs__list-link_active" to={ path }>
        { props.name }
      </NavLink>
    </li>
  );
}

export default DialogItem;