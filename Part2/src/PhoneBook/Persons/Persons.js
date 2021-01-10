import React from "react";

const Persons = ({ personsArr, onClickHandler }) => {
  return (
    <div>
      {personsArr.map((person) => (
        <div key={person.name}>
          <h4>
            {person.name} {person.number}
          </h4>
          <button onClick={() => onClickHandler(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
