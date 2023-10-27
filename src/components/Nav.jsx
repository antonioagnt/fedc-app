import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav>
        <Link to='/Specials' className='nav-item'>
          Specials
        </Link>
        <Link to='/' className='nav-item'>
          Home
        </Link>
        <Link to='/BookingPage' className='nav-item'>
          Booking Page
        </Link>
      </nav>
    </>
  );
}
