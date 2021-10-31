import React from 'react';
import styles from './Message.module.scss';
import userPhoto from '../../../images/user-photo.png';

const Message = (props) => {
  return (
    <div className={ styles.dialogs__messageBlock }>
      <img src={ userPhoto } alt="" className={ styles.dialogs__authorPhoto }/>
      <p className={ styles.dialogs__authorName }>{ props.name }</p>
      <p className={ styles.dialogs__message }>{ props.text }</p>
    </div>
  );
}

export default Message;