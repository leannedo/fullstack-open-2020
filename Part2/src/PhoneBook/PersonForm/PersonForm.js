import React from "react";

const PersonForm = ({
  onSubmitHandler,
  newName,
  newNumber,
  onPersonChangeHandler,
  onNumberChangeHandler,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        Name :{" "}
        <input type="text" value={newName} onChange={onPersonChangeHandler} />
      </div>
      <br />
      <div>
        Number :{" "}
        <input type="text" value={newNumber} onChange={onNumberChangeHandler} />
      </div>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonForm;
