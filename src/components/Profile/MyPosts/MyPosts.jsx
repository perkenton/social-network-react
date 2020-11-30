import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import './MyPosts.scss';

const MyPosts = () => {
  const postsData = [
    { id: 1, text: 'Hello!', likesCount: 5 },
    { id: 2, text: 'Posted post', likesCount: 4 },
    { id: 3, text: 'Реакт, редакс знать будешь круто!', likesCount: 15 },
  ];

  return (
    <div className="my-posts">
      <h2 className="my-posts__title">Мои посты</h2>
      <NewPost />

      <Post text="Hello!" likesCount='5' />
      <Post text="Posted post" likesCount='4' />
    </div>
  );
}

export default MyPosts;