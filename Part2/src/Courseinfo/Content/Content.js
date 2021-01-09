import React from "react";
import Part from "./Part/Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part part={part} key={i} />
      ))}
    </div>
  );
};

export default Content;
