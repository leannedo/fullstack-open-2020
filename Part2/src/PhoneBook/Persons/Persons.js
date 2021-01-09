import React from "react";

const Persons = ({ personsArr }) => {
  return (
    <div>
      {personsArr.map((person) => (
        <h4 key={person.name}>
          {person.name} {person.number}
        </h4>
      ))}
    </div>
  );
};

export default Persons;
