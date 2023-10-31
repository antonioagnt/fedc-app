import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 10 };
  return state;
};

export default function FormReducert() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <button onClick={() => dispatch({ type: 'buy_ingredients' })}>
        Shooping for veggies!
      </button>
      <button onClick={() => dispatch({ type: 'sell_a_meal' })}>
        Server a meal for customers
      </button>
    </div>
  );
}
