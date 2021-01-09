import React from "react";

const Filter = ({ onChangeHandler }) => {
  return (
    <div>
      Find someone <input type="text" onChange={onChangeHandler} />
    </div>
  );
};

export default Filter;
