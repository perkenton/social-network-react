import React from 'react';
import styles from './NewPost.module.scss';

const NewPost = () => {
  return (
    <div className={ styles.newPost }>
      <textarea name="newPost" id="newPost" cols="30" rows="5" className={ styles.newPost__textarea } />
      <button className={ styles.newPost__addButton }>Добавить</button>
    </div>
  );
}

export default NewPost;