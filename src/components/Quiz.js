import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  
  // Dummy quiz questions (expand as needed)
  const questions = [
    { question: 'What does a Vpn help with securing apps?', options: ['Reduces app performance', 'Encrypts traffic', 'Restricts user RBAC'], answer: 'Encrypts traffic' },
    { question: 'What is the purpose of OAuth in API Security?', options: ['Grant access without sharing credentials', 'Prevent data loss', 'Speeden API response'], answer: 'Grant access without sharing credentials' },
    { question: 'What is network segmentation help prevent?', options: ['Spreading malware', 'Faster data transfer', 'High performance'], answer: 'Spreading malware' },
    { question: 'What is the purpose of Firewall?', options: ['Block unautherised access', 'Reduce bandwidth', 'Log activity'], answer: 'Block unautherised access' },
    { question: 'Which type of attack does encryption help mitigate?', options: ['MITM', 'DoS', 'SQL Injection'], answer: 'MITM' },
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
