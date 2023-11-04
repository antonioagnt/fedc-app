import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm(props) {
  const navigate = useNavigate();

  const handleSubmitRedirect = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate('/Confirmation');
  };
  const { selectedTime, handleTimeChange, handleSubmit, timeOptions } = props;

  return (
    <>
      <div className='Booking-form'>
        <form onSubmit={handleSubmitRedirect}>
          <label>Date</label>
          <input type='date'></input>
          <label>Select Time</label>
          <select value={selectedTime} onChange={handleTimeChange}>
            {timeOptions.map((Toption) => (
              <option key={Toption} value={Toption}>
                {Toption}
              </option>
            ))}
          </select>
          <label>Number of seats</label>
          <select id='number-of-tables'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          <label>Name</label>
          <input required type='text'></input>
          <label htmlFor='email'>Email</label>
          <input id='email' required type='email'></input>
          <button type='submit' className='button-submit' aria-label='On Click'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
