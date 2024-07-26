import React, { useState } from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
const StatisticLine = ({label, value}) => (
  <p>
    {label} : {value}
  </p>
);

const Statistics = ({good, neutral, bad}) =>{
    
  // Calculate total comments
  const totalComments = good + neutral + bad;

  if(totalComments === 0){
    return <p>NO FEEDBACK GIVEN</p>
  }

  // Calculate average score
  const averageScore = (good - bad) / totalComments;

  // Calculate positive percentage
  const positivePercentage = (good / totalComments) * 100;

  return (
    <div>
      <table>
      <tbody>
        <StatisticLine label="Good" value={good} />
        <StatisticLine label="Neutral" value={neutral} />
        <StatisticLine label="Bad" value={bad} />
        <StatisticLine label="Total Comments" value={totalComments} />
        <StatisticLine label="Average Score" value={averageScore.toFixed(2)} />
        <StatisticLine label="Positive Percentage" value={`${positivePercentage.toFixed(2)}%`} />
      </tbody>
      </table>
  </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Button label="Good" onClick={() => handleButtonClick('good')} />
      <Button label="Neutral" onClick={() => handleButtonClick('neutral')} />
      <Button label="Bad" onClick={() => handleButtonClick('bad')} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
