import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

export default function BookingPage(props) {
  const { selectedDate, handleDateChange, handleSubmit, dateOptions } = props;
  return (
    <>
      <div className='form-section'>
        <h1>Booking form</h1>
        <BookingForm
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
          dateOptions={dateOptions}
        />
      </div>
    </>
  );
}
