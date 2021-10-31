import React from 'react';
import styles from './Post.module.scss';
import userPhoto from '../../../../images/user-photo.png';

const Post = (props) => {
  return (
    <div className={ styles.post }>
      <img src={ userPhoto } alt="Фото автора" className={ styles.post__authorPhoto} />
      <p className={ styles.post__text }>{ props.text }</p>
      <p className={ styles.post__likes }>Likes: { props.likesCount }</p>
    </div>
  );
}

export default Post;