// src/Footer.js

import React from 'react';
import './Footer.css';

function Footer(){
  const year = new Date();
  return(
    <footer className="Footer">
      <p>Yin Chang copyright {year.getFullYear()}</p>
    </footer>
    
  )
}

export default Footer