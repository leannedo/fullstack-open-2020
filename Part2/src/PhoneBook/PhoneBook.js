import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./Filter/Filter";
import PersonForm from "./PersonForm/PersonForm";
import Persons from "./Persons/Persons";

const PhoneBook = () => {
  const [persons, setPersons] = useState([]);
  const [foundPersons, setFoundPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const findExistingPersonByName = (name) => {
    return persons.find((person) => person.name === name);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personExist = findExistingPersonByName(newName);

    if (personExist) {
      onUpdateExistingPerson(personExist, newNumber);

      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService.create(personObject).then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setNewName(" ");
      setNewNumber(" ");
    });
  };

  const onUpdateExistingPerson = (existingPerson, updateFieldValue) => {
    const confirm = window.confirm(
      `${existingPerson.name} is already added, update phone number?`
    );

    const updateObject = { ...existingPerson, number: updateFieldValue };

    confirm &&
      personService
        .update(existingPerson.id, updateObject)
        .then((updatedPerson) => {
          console.log(updatedPerson);
          setPersons(
            persons.map((person) =>
              person.id !== existingPerson.id ? person : updatedPerson
            )
          );
          setNewName(" ");
          setNewNumber(" ");
        });
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

  const onPersonDelete = (id) => {
    const confirm = window.confirm("Delete users?");
    confirm &&
      personService.deletePerson(id).then((response) => {
        console.log(response);
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <Persons personsArr={persons} onClickHandler={onPersonDelete} />
      <h2>Search result</h2>
      <Persons personsArr={foundPersons} />
    </div>
  );
};

export default PhoneBook;
