import React from 'react';
import './Post.scss';
import userPhoto from "../../../../images/user-photo.png";

const Post = (props) => {
  return (
    <div className="post">
      <img src={ userPhoto } alt="Фото автора" className="post__author-photo" />
      <p className="post__text">{ props.text }</p>
      <p className="post__likes">Likes: { props.likesCount }</p>
    </div>
  );
}

export default Post;