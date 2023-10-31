function FormProto2(props) {
  const { selectedDate, handleDateChange, handleSubmit, dateOptions } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default FormProto2;
