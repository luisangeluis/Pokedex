import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

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
