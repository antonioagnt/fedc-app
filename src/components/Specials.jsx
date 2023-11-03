import React from 'react';
import SpecialCards from './SpecialCards';
import './Specials.css';

const foodsToRender = [
  {
    name: 'brus',
    key: '0001',
    imgUrl: './img/brus.png',
    price: '12.99',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
  },
  {
    name: 'brus2',
    key: '0002',
    imgUrl: './img/greek-salad.png',
    price: '12.99',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
  },
  {
    name: 'brus3',
    key: '0003',
    imgUrl: './img/gril-fish.png',
    price: '12.99',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
  },
];
export default function Specials() {
  return (
    <div className='special-container'>
      <div className='special-header'>
        <h3>Specials</h3>
        <button className='button button-specials'>Online Menu</button>
      </div>

      <div className='special-card-holder'>
        <SpecialCards {...foodsToRender[0]} />
        <SpecialCards {...foodsToRender[1]} />
        <SpecialCards {...foodsToRender[2]} />
      </div>
    </div>
  );
}
