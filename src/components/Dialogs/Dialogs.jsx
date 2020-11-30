import React from 'react';
import './Dialogs.scss';
import userPhoto from "../../images/user-photo.png";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <h1 className="dialogs__title">Dialogs</h1>

      <ul className="dialogs__list">
        <li className="dialogs__list-item dialogs__list-item_active">Julia</li>
        <li className="dialogs__list-item">Egor</li>
      </ul>

      <div className="dialogs__messages">
        <div className="dialogs__message-block">
          <img src={ userPhoto } alt="" className="dialogs__author-photo"/>
          <p className="dialogs__author-name">Julia</p>
          <p className="dialogs__message">Hi!</p>
        </div>

        <div className="dialogs__message-block">
          <img src={ userPhoto } alt="" className="dialogs__author-photo"/>
          <p className="dialogs__author-name">Julia</p>
          <p className="dialogs__message">Yo</p>
        </div>

        <div className="dialogs__message-block">
          <img src={ userPhoto } alt="" className="dialogs__author-photo"/>
          <p className="dialogs__author-name">Julia</p>
          <p className="dialogs__message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam odit qui ratione, voluptas voluptatibus!</p>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;