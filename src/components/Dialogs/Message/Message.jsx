import React from 'react';
import styles from './Message.module.scss';
import userPhoto from '../../../images/user-photo.png';

const Message = (props) => {
  return (
    <div className={ styles.messageBlock }>
      <img src={ userPhoto } alt='Avatar' className={ styles.authorPhoto }/>
      <p className={ styles.authorName }>{ props.name }</p>
      <p className={ styles.message }>{ props.text }</p>
    </div>
  );
}

export default Message;