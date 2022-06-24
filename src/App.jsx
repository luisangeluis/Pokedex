import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './compoonents/Login';
import Home from './compoonents/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pokedex" element={<Home />}>
          <Route path="/pokedex/prueba" element={<h2>Elemento de prueba</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
