import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormProto2(props) {
  const navigate = useNavigate();

  const handleSubmitRedirect = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate('/Confirmation');
  };
  const { selectedDate, handleDateChange, handleSubmit, dateOptions } = props;

  return (
    <>
      <form onSubmit={handleSubmitRedirect}>
        <fieldset>
          <h2>Form Proto 2</h2>
          <div className='Field'>
            <label>Select Date:</label>
            <select value={selectedDate} onChange={handleDateChange}>
              {dateOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
            <label>Select Time</label>
            <select id='res-time '>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
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
          </div>
          <div>
            <label>Name</label>
            <input type='text'></input>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default FormProto2;
