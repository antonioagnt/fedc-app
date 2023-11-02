import React from 'react';
import brus from '../img/brus.png';

import './SpecialCards.css'

export default function SpecialCards() {
  return (
    <>

        <card className="card-specials">
          <img className='img-card' src={brus} ></img>
          <div className='card-top-text'>
            <h4>t3ste</h4>
            <p>teste</p>
          </div>

            <p>Flavor teeeext lorem ipsu dolem comida bblah bblash blash</p>
            <div className='card-bottom-text'>
            <p>Order</p>
            <button>Bike</button>
          </div>
        </card>

    </>
  );
}
