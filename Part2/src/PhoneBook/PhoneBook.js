import React, { useState } from "react";
import Filter from "./Filter/Filter";
import PersonForm from "./PersonForm/PersonForm";
import Persons from "./Persons/Persons";

const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 0 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 1 },
    { name: "Dan Abramov", number: "12-43-234345", id: 2 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 3 },
  ]);
  const [foundPersons, setFoundPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const findExistingPersonByName = (arr) => {
    return arr.find((person) => person.name === newName);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const found = findExistingPersonByName(persons);

    if (found) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.length + 1,
    };

    setPersons([...persons, personObject]);

    setNewName(" ");
    setNewNumber(" ");
  };

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const displaySearchedPersons = (e) => {
    const keyword = e.target.value.toLowerCase();

    const result =
      keyword !== ""
        ? persons.filter((person) =>
            person.name.toLowerCase().includes(keyword)
          )
        : [];

    setFoundPersons(result);
  };

  return (
    <div>
      <h1>Phone Book</h1>
      <Filter onChangeHandler={displaySearchedPersons} />
      <h1>Add new</h1>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmitHandler={addPerson}
        onPersonChangeHandler={handlePersonChange}
        onNumberChangeHandler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsArr={foundPersons} />
    </div>
  );
};

export default PhoneBook;
