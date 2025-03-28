import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Voitures from './pages/Voitures';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/voitures">Voitures</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> { }
          <Route path="/voitures" element={<Voitures />} /> { }
        </Routes>
      </div>
    </Router>
  );
};

export default App;