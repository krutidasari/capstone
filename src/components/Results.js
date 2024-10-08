import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation(); // Retrieve the state passed from the quiz
  const score = state?.score || 0; // Default to 0 if no score is passed

  return (
    <div className="results-container">
      <h2>Your Score</h2>
      <p>You scored: {score} points</p>
    </div>
  );
};

export default Results;
