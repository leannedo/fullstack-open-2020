import React, { useState } from "react";
import Note from "./Note";

const NoteList = () => {
  const noteList = [
    {
      content: "Fullstack Engineering",
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      // 50% chance of being important
      id: "Fullstack Engineering".length + 1,
    },
    {
      content: "Frontend Development",
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      // 50% chance of being important
      id: "Frontend Development".length + 1,
    },
    {
      content: "Data Structure",
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      // 50% chance of being important
      id: "Data Structure".length + 1,
    },
  ];

  const [notes, setNotes] = useState(noteList);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      // 50% chance of being important
      id: newNote.length + 1,
    };
    setNotes([...notes, noteObject]);
    setNewNote("");
  };

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note.content} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <br />
      <br />
      <button onClick={() => setShowAll(!showAll)}>
        show {!showAll ? "all" : "important"}
      </button>
    </>
  );
};

export default NoteList;
