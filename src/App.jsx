import Footer from './components/Footer';
import Header from './components/Header';
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Specials from './components/Specials';
import BookingPage from './components/BookingPage';
import FormProto2 from './components/FormProto2';


// const updateDates = (state, action) => {
//   switch (action.type) {
//     case 'change_value':
//       return {
//         ...state,
//         selectedDate: action.payload,
//       };
//     case 'on_submit':
//       alert(`selected date: ${state.selectedDate}`);
//       return state;
//     default:
//       return state;
//   }
// };
function App() {
  // const handleSelectChange = (e) => {
  //   dispatch({ type: 'change_value', payload: e.target.value });
  // };

  // const handleSubmitRedux = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: 'on_submit' });
  // };
  // const initialState = {
  //   selectedDate: 'manana',
  //   dateOptions: ['manana', 'tardia', 'evening'],
  // };
  // const [state, dispatch] = useReducer(updateDates, initialState);

  return (
    <>
       <Header />
      {/* <FormProto2
        selectedDate={state.selectedDate}
        handleDateChange={handleSelectChange}
        handleSubmit={handleSubmitRedux}
        dateOptions={state.dateOptions}
      /> */}
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
