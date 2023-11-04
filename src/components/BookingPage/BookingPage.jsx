import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

export default function BookingPage(props) {
  const { selectedTime, handleTimeChange, handleSubmit, timeOptions } = props;
  return (
    <>
      <div className='form-section'>
        <h1>Booking form</h1>
        <BookingForm
          selectedDate={selectedTime}
          handleTimeChange={handleTimeChange}
          handleSubmit={handleSubmit}
          timeOptions={timeOptions}
        />
      </div>
    </>
  );
}
