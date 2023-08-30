import React from 'react';
import Navbar from './components/nabvar';
import Cards from './components/cards';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content-container">
        <Cards />
      </div>
    </div>
  );
};

export default App;