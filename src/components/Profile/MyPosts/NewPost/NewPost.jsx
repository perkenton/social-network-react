import React from 'react';
import styles from './NewPost.module.scss';

const NewPost = () => {
  return (
    <div className={ styles.newPost }>
      <textarea name="newPost" id="newPost" cols="30" rows="5" className={ styles.textarea } />
      <button className={ styles.addButton }>Добавить</button>
    </div>
  );
}

export default NewPost;