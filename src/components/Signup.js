import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords do not match');
    } else if (firstName && lastName && email && password) {
      navigate('/');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div>
      <h1 className="app-title">CYBER HYGIENE APP</h1> {/* New app title */}
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
