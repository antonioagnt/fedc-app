import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import React, { useEffect, useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import FormProto from './components/FormProto';
import FormProto2 from './components/FormProto2';
import FormReducert from './components/FormReducert';

function App() {
  const [selectedDate, setSelectedDate] = useState('morning');
  const DateOptionsList = ['dia', 'afternoon', 'evening'];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
  };

  const updateDates = (state, action) => {
    return state;
  };

  const initializeDates = () => {
    return DateOptionsList;
  };
  const [availableDates, dispatch] = useReducer(updateDates, initializeDates());

  return (
    <>
      <Header />
      <Nav />
      <CallToAction />
      <FormReducert />
      <FormProto />
      <FormProto2
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        dateOptions={DateOptionsList}
      />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Specials' element={<Specials />} />
        <Route path='/BookingPage' element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
