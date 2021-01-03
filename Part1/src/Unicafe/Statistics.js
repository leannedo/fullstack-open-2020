import React from "react";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ text, value = {} }) => {
  const { good, neutral, bad } = value;

  const all = good + bad + neutral;

  const calculatePositiveResult = () => {
    const positivePercentage = (good / all) * 100 || 0;

    return `${positivePercentage.toFixed(2)} %`;
  };

  const calculateAverage = () => {
    const average = (good - bad) / all;

    return average.toFixed(2);
  };

  return (
    <div>
      <table style={{ margin: "auto" }}>
        <tbody>
          <Statistic text={text.good} value={good} />
          <Statistic text={text.neutral} value={neutral} />
          <Statistic text={text.bad} value={bad} />
          <Statistic text={text.all} value={good + bad + neutral} />
          <Statistic text={text.average} value={calculateAverage()} />
          <Statistic text={text.positive} value={calculatePositiveResult()} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
