import React from 'react';
import './NewPost.scss';

const NewPost = () => {
  return (
    <div className="new-post">
      <textarea name="newPost" id="newPost" cols="30" rows="5" className="new-post__textarea" />
      <button className="new-post__add-button">Добавить</button>
    </div>
  );
}

export default NewPost;