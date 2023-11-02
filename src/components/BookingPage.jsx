import React from 'react';
import FormProto2 from './FormProto2';

export default function BookingPage(props) {
  const { selectedDate, handleDateChange, handleSubmit, dateOptions } = props;
  return (
    <>
      <FormProto2
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        dateOptions={dateOptions}
      />
    </>
  );
}
