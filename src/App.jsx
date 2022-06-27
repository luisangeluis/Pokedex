import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import PokemonsList from './components/PokemonsList';
import MainLayout from './components/MainLayout';

function App() {
  const saludo = 'hola';
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/pokedex/" element={<Home />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
          <Route path="/*" element={<h2>Ruta no existe</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
