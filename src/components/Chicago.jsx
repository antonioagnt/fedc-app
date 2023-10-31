import React from 'react';
import img1 from '../img/MarioandAdrianA.jpg';
import './Chicago.css';
export default function Chicago() {
  return (
    <div className='chicagobox'>
      <div className='lefttext'>
        <h2>Little lemon</h2>
        <h3>Chicago</h3>
        <p>Texto</p>
      </div>
      <div className='chicagoImg'>
        <img style={{ width: 400 }} src={img1}></img>
      </div>
    </div>
  );
}
