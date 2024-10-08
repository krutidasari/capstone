import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple auth logic: proceed to Home if input is not empty
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div>
      <h1 className="app-title">CYBER HYGIENE APP</h1> {/* New app title */}
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <p>
          Forgot your password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
