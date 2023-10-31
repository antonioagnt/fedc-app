import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ul>
            <h4>Dormant Navigation</h4>
            <li>
              <Link to='/' className='nav-item'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-item'>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-item'>
                Menu
              </Link>
            </li>
            <li>
              <Link to='/BookingPage' className='nav-item'>
                Reservations
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-item'>
                Reservation
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-item'>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>Contact</h4>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Telephone</li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>Social Media Links</h4>
            <li>Instagram</li>
            <li>Facebbook</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
