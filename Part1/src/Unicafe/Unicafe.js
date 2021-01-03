import React, { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statisticsText = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad",
    all: "All",
    average: "Average",
    positive: "Positive",
  };

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>
      <Button
        onClickHandler={() => setGood(good + 1)}
        label={statisticsText.good}
      />
      <Button
        onClickHandler={() => setNeutral(neutral + 1)}
        label={statisticsText.neutral}
      />
      <Button
        onClickHandler={() => setBad(bad + 1)}
        label={statisticsText.bad}
      />
      <h2>Statistics</h2>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics text={statisticsText} value={{ good, neutral, bad }} />
      ) : (
        <h4>No feedback given</h4>
      )}
    </div>
  );
};

export default Unicafe;
