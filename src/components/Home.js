import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  const navigate = useNavigate();

  // Dummy module topics, replace with your actual module names and paths
  const modules = [
    { name: 'Module 1: Authentication and Access Control', path: '/module/1' },
    { name: 'Module 2: Data Protection', path: '/module/2' },
    { name: 'Module 3: Secure Development Practices', path: '/module/3' },
    { name: 'Module 4: Network Security', path: '/module/4' },
  ];

  return (
    <div className="home-container">
      <h1>Hello there, nat.</h1>
      <p>Quote Of The Day</p>
      <div className="quote-box">
        <p>Cyberbullying is the biggest online concern, already affecting up to 35% of all children.</p>
      </div>
      <div className="overview">
        <h3>Where were we?</h3>
        <button className="resume-button">Resume</button>
      </div>

      {/* Modules Section */}
      <h2>Modules</h2>
      <div className="modules-container">
        {modules.map((module, index) => (
          <div
            key={index}
            className="module-box"
            onClick={() => navigate(module.path)}
          >
            {module.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
