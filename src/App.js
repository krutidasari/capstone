import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Module from './components/Module';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/module/:moduleId" element={<Module />} />
          <Route path="/quiz/:moduleId" element={<Quiz />} />
          <Route path="/results" element={<Results />} /> {/* Add route for Results */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
