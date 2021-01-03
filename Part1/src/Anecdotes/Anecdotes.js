import React, { useState } from "react";

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const points = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  const generateRandomAnecdote = () => {
    const randomInteger = Math.floor(Math.random() * 6);
    setSelected(randomInteger);
  };

  const handleVote = () => {
    const cloneArr = [...votes];
    cloneArr[selected] += 1;
    setVotes(cloneArr);
  };

  const displayAnecdoteWithMaxVote = () => {
    const maxVote = Math.max(...votes);
    const indexOfMaxVote = votes.indexOf(maxVote);
    return (
      <div>
        <h4>{anecdotes[indexOfMaxVote]}</h4>
        <p>has {maxVote} votes</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <h4>{anecdotes[selected]}</h4>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => handleVote()}>Vote</button>
      <button onClick={() => generateRandomAnecdote()}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {displayAnecdoteWithMaxVote()}
    </div>
  );
};

export default Anecdotes;
