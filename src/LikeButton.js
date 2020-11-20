// src/LikeButton.js
import React from 'react';
import './LikeButton.css';

function LikeButton(props){
  let like_count = props.count;
  function increaseLike(){
    like_count  +=  1
  }
  return(
  <button className="LikeButton" onClick={increaseLike}>Likes: {like_count }</button>
  )
}

export default LikeButton