import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

export default function ConfirmationPage(props) {
  return (
    <div className='confirmation-container'>
      <div className='header-confirmation'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </div>
      <h2>Reservation Sucefull</h2>
      <img src='./img/icons/sucefullBadge.png' alt='sucefull badge'></img>
      <div>
        <h2>thanks</h2>
        <p>You reserve at {props.selectedTime} a clock was made !</p>
      </div>
      <Link to='/'>
        <button className='button-submit'>Go Home</button>
      </Link>
    </div>
  );
}
