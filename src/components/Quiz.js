import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  
  // Dummy quiz questions (expand as needed)
  const questions = [
    { question: 'Question 1?', options: ['Option A', 'Option B', 'Option C'], answer: 'Option A' },
    { question: 'Question 2?', options: ['Option A', 'Option B', 'Option C'], answer: 'Option B' },
    { question: 'Question 3?', options: ['Option A', 'Option B', 'Option C'], answer: 'Option C' },
    { question: 'Question 4?', options: ['Option A', 'Option B', 'Option C'], answer: 'Option A' },
    { question: 'Question 5?', options: ['Option A', 'Option B', 'Option C'], answer: 'Option C' },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = value;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    navigate(`/results`, { state: { score } }); // Navigate to Results component with score
  };

  return (
    <div className="quiz-container">
      <h2>Quiz for Module {moduleId}</h2>
      {questions.map((q, index) => (
        <div key={index} className="quiz-question">
          <p>{q.question}</p>
          {q.options.map((option, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
                checked={selectedAnswers[index] === option}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
};

export default Quiz;
