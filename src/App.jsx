import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import FormProto from './components/FormProto';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <CallToAction />
      <FormProto />
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
