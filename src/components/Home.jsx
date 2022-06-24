import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonsList from './PokemonsList';

const Home = () => {
  const userName = useSelector((state) => state.userName);
  const [urlsPokemon, setUrlsPokemon] = useState();
  const [pokemons, setPokemons] = useState();

  useEffect(() => {}, []);

  useEffect(() => {}, [urlsPokemon]);

  return (
    <div>
      {urlsPokemon?.map((url) => {
        <p>{url}</p>;
      })}
      <PokemonsList pokemons={pokemons} />
    </div>
  );
};

export default Home;
