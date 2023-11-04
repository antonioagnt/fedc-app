import React, { useState } from 'react';
const Form = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input value={value} onChange={handleChange} type='Text' />
    </form>
  );
};

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <>
      <h1>My little lemon goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='goal'
          placeholder='Goal'
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='by'
          placeholder='By ...'
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => {
        return (
          <li key={g.goal}>
            <span>
              My goal is to {g.goal}, by {g.by}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
export default function BookingForm() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <>
      <form>
        <select id='res-time '>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </form>
      <form>
        <input type='text' />
      </form>
      <Form />
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  );
}
