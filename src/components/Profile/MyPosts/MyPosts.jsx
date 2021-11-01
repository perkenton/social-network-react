import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import styles from './MyPosts.module.scss';

const MyPosts = () => {
  const postsData = [
    { id: 1, text: 'Hello!', likesCount: 5 },
    { id: 2, text: 'Posted post', likesCount: 4 },
    { id: 3, text: 'Реакт, редакс знать будешь круто!', likesCount: 15 },
  ];

  return (
    <div className={ styles.myPosts }>
      <h2 className={ styles.title }>Мои посты</h2>
      <NewPost />

      {
        postsData.map( post => <Post id={ post.id } text={ post.text } likesCount={ post.likesCount } /> )
      }

    </div>
  );
}

export default MyPosts;