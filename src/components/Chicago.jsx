import React from 'react';
import img1 from '../img/MarioandAdrianA.jpg';
import './Chicago.css';
export default function Chicago() {
  return (
    <div className='chicagobox'>
      <div className='lefttext'>
        <h2>Little lemon</h2>
        <h3>Chicago</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words,
        </p>
      </div>

      <img src={img1} className='chicagoImg' alt='chicago'></img>
    </div>
  );
}
