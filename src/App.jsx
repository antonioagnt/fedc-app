import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Specials from './components/Specials/Specials';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import BookingPage from './components/BookingPage/BookingPage';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'change_value':
      return {
        ...state,
        selectedTime: action.payload,
      };
    case 'on_submit':
      return state;
    default:
      return state;
  }
};
function App() {
  const handleSelectChange = (e) => {
    dispatch({ type: 'change_value', payload: e.target.value });
  };

  const handleSubmitRedux = (e) => {
    e.preventDefault();
    dispatch({ type: 'on_submit' });
  };
  const initialState = {
    selectedTime: '08:00',
    timeOptions: ['08:00', '08:30', '09:00'],
  };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Specials' element={<Specials />} />
        <Route
          path='/BookingPage'
          element={
            <BookingPage
              selectedTime={state.selectedTime}
              handleTimeChange={handleSelectChange}
              handleSubmit={handleSubmitRedux}
              timeOptions={state.timeOptions}
            />
          }
        />
        <Route
          path='/Confirmation'
          element={<ConfirmationPage selectedTime={state.selectedTime} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
