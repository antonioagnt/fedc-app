import React from 'react';
import SpecialCards from './SpecialCards';
import './Specials.css'
export default function Specials() {
  return (
    <div className='special-container'>
    <div className='special-header'>
    <h3>Specials</h3>
    <button>Online Menu</button>
    </div>

      <div className='special-card-holder'>
        <SpecialCards />
        <SpecialCards />
        <SpecialCards />
      </div>
    </div>
  );
}
