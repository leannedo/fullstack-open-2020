import React from "react";

const Button = ({ label, onClickHandler }) => {
  return <button onClick={onClickHandler}>{label}</button>;
};

export default Button;
