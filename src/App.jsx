import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="pokedex" element={<PokemonsList />} />
          <Route path=":id" element={<PokemonDetail></PokemonDetail>} />
        </Route>
        <Route path="*" element={<h2>Ruta no existe</h2>} />

      </Routes>
    </div>
  );
}

export default App;
