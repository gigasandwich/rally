import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Voitures App!</h1>
      <p>This is a simple application to track and view voiture (car) information.</p>
      <p>Click below to see the list of available voitures:</p>
      
      <Link to="/voitures">
        <button>View Voitures</button>
      </Link>
    </div>
  );
};

export default Home;