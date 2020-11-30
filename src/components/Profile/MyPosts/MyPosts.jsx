import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import './MyPosts.scss';

const MyPosts = () => {
  return (
    <div className="my-posts">
      <h2 className="my-posts__title">Мои посты</h2>
      <NewPost />

      <Post text="Hello!" />
      <Post text="Posted post" />
    </div>
  );
}

export default MyPosts;