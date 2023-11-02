import React from 'react';

import './SpecialCards.css';

export default function SpecialCards(props) {
  return (
    <>
      <div className='card-specials card'>
        <img className='img-card' src={props.imgUrl} alt='fail'></img>
        <div className='card-top-text'>
          <h4>{props.name}</h4>
          <p>{props.price}</p>
        </div>

        <p>Flavor teeeext lorem ipsu dolem comida bblah bblash blash</p>
        <div className='card-bottom-text'>
          <p>Order</p>
          <button>Bike</button>
        </div>
      </div>
    </>
  );
}
