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

        <p>{props.text}</p>
        <div className='card-bottom-text'>
          <h4>Order a delivery</h4>
          <button className='order-delivery'>
            <img src='./img/icons/mopped-icon.png' alt='mopped'></img>
          </button>
        </div>
      </div>
    </>
  );
}
