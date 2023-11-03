import React from 'react';
import SpecialCards from './SpecialCards';
import './Specials.css';

const foodsToRender = [
  {
    name: 'Greek Salad',
    key: '0001',
    imgUrl: './img/specials-img/greek-salad-b.jpg',
    price: '$ 12.99',
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    name: 'Bruchetta',
    key: '0002',
    imgUrl: './img/specials-img/bruchetta-b.jpg',
    price: '$ 5.99',
    text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    name: 'Lemon Dessert',
    key: '0003',
    imgUrl: './img/specials-img/lemon-dessert-b.jpg',
    price: '$ 5.00',
    text: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
  },
];
export default function Specials() {
  return (
    <div className='special-container'>
      <div className='special-header'>
        <h1>This weeks specials!</h1>
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
