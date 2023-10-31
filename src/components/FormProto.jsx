import React, { useState } from 'react';

function FormProto() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    console.log(name);
    e.preventDefault();
    setName('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Form Proto</h2>
          <div className='Field'>
            <label>Name:</label>
            <input
              type='text'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type='submit'>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default FormProto;
