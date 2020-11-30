import React from 'react';
import './Message.scss';
import userPhoto from '../../../images/user-photo.png';

const Message = (props) => {
  return (
    <div className="dialogs__message-block">
      <img src={ userPhoto } alt="" className="dialogs__author-photo"/>
      <p className="dialogs__author-name">{ props.name }</p>
      <p className="dialogs__message">{ props.text }</p>
    </div>
  );
}

export default Message;