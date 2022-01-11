import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects/';

import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
