import React from 'react';
import styles from './Post.module.scss';
import userPhoto from '../../../../images/user-photo.png';

const Post = (props) => {
  return (
    <div className={ styles.post }>
      <img src={ userPhoto } alt="Avatar" className={ styles.authorPhoto} />
      <p className={ styles.text }>{ props.text }</p>
      <p className={ styles.likes }>Likes: { props.likesCount }</p>
    </div>
  );
}

export default Post;