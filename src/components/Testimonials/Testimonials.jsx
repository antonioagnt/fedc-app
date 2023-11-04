import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';

const testimonialToRender = [
  {
    name: 'John Doe',
    nick: 'DoeOp',
    review: 'Latin professor at Hampden-Sydney College in Virginia',
    imgUrl: './img/referals/avatar1.png',
  },
  {
    name: 'Marry Abel',
    nick: 'Marry82',
    review: 'Latin professor at Hampden-Sydney College in Virginia',
    imgUrl: './img/referals/avatar2.png',
  },
  {
    name: 'Susan Dole',
    nick: 'HappyDole',
    review: 'Latin professor at Hampden-Sydney College in Virginia',
    imgUrl: './img/referals/avatar3.png',
  },
  {
    name: 'Rex Smith',
    nick: 'SmithRex',
    review: 'Latin professor at Hampden-Sydney College in Virginia',
    imgUrl: './img/referals/avatar4.png',
  },
];

export default function Testimonials() {
  return (
    <div className='testimonial-section'>
      <h1>What our costumes says !</h1>
      <div className='testimonial-cards'>
        <TestimonialCard {...testimonialToRender[0]} />
        <TestimonialCard {...testimonialToRender[1]} />
        <TestimonialCard {...testimonialToRender[2]} />
        <TestimonialCard {...testimonialToRender[3]} />
      </div>
    </div>
  );
}
