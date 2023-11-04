import React from 'react';
import './TestimonialCards.css';

export default function TestimonialCard(props) {
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
        <img className='img-testimonial' alt='user' src={props.imgUrl} />
        <div className='name-nick'>
          <h3>{props.name}</h3>
          <p>{props.nick}</p>
        </div>
      </div>
      <p>{props.review}</p>
    </section>
  );
}
