import React from 'react';
import styles from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <li className={ styles.dialogs__listItem }>
      <NavLink className={ styles.dialogs__listLink} activeClassName={ styles.dialogs__listLink_active } to={ path }>
        { props.name }
      </NavLink>
    </li>
  );
}

export default DialogItem;