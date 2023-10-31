import React, { useReducer } from 'react';
const initializeDates = ['manana', 'tardia', 'evening'];

const reducer = (state, action) => {
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

export default function SelectReducer() {
  const initialState = {
    selectedDate: 'manana',
    dateOptions: initializeDates,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSelectChange = (e) => {
    dispatch({ type: 'change_value', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'on_submit' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Form Redux</h2>
          <div className='Field'>
            <label>Select Date:</label>
            <select value={state.selectedDate} onChange={handleSelectChange}>
              {state.dateOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </>
  );
}
