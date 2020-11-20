// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import data from './sfpopos-data.json'
import './POPOSList.css';

function POPOSList() {

  const spaces = data.map((obj) => {
    // Deconstruct obj into properties
    const { title, address, images, hours } = obj
  
    return (
      <POPOSSpace
        key={title} // The title could be a key
        name={title}
        address={address}
        image={images[0]}
        hours = {hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}


export default POPOSList