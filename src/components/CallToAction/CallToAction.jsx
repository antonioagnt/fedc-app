import React from 'react';
import './CallToAction.css';
export default function CallToAction() {
  return (
    <section className='call-to-Action'>
      <div className='call-left-box'>
        <div className='header-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words,
        </p>
        <button className='button-call button'>Book A table</button>
      </div>
      <img
        alt='foto-call'
        src='./img/call-to-action-b.jpg'
        className='foto-call'
      ></img>
    </section>
  );
}
