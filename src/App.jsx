import Footer from './components/Footer';
import Header from './components/Header';
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import ConfirmationPage from './components/ConfirmationPage';
import BookingPage from './components/BookingPage';

const updateDates = (state, action) => {
  switch (action.type) {
    case 'change_value':
      return {
        ...state,
        selectedDate: action.payload,
      };
    case 'on_submit':
      alert(`selected date: ${state.selectedDate}`);
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
    selectedDate: '01/03/2023',
    dateOptions: ['01/03/2023', '01/04/2023', '01/05/2023'],
  };
  const [state, dispatch] = useReducer(updateDates, initialState);

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
              selectedDate={state.selectedDate}
              handleDateChange={handleSelectChange}
              handleSubmit={handleSubmitRedux}
              dateOptions={state.dateOptions}
              confirmedStatus={state.confirmed}
            />
          }
        />
        <Route path='/Confirmation' element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
