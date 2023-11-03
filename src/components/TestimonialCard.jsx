import React from 'react';
import './TestimonialCards.css';
export default function TestimonialCard() {
  return (
    <section className='card-testimonial'>
      <div className='starbox'>
        <img src='./img/icons/star.png' alt='' />
        <img src='./img/icons/star.png' alt='' />
        <img src='./img/icons/star.png' alt='' />
        <img src='./img/icons/star.png' alt='' />
        <img src='./img/icons/star.png' alt='' />
      </div>
      <div className='photo-names'>
        <img
          className='img-testimonial'
          alt='user'
          src='./img/referals/avatar1.png'
        />
        <div className='name-nick'>
          <h3>Name</h3>
          <p>nick</p>
        </div>
      </div>
      <div>lore ipsum solo dolum itsu</div>
    </section>
  );
}
