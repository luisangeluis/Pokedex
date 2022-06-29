import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import MainLayout from './components/MainLayout';
import { useSelector } from 'react-redux';

function App() {
  const userName = useSelector((state) => state.userName);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout isLogged={userName ? true : false} />}>
          <Route path="/pokedex/" element={<Home />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
          <Route path="/*" element={<h2>Ruta no existe</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
