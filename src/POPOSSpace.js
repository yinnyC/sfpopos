// src/Project.js
import LikeButton from './LikeButton';
import React from 'react'
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours } = props
  let like_count = 0;
  return (
    <div className="POPOSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300" 
        height="300" 
        alt='{name}'
      />
      <h3>{name}</h3>
      <div>{address}</div>
      <div className="hours">{hours}</div>
      <LikeButton  count={like_count}/>
    </div>
  )
}

export default POPOSSpace