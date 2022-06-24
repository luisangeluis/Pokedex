import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PokemonsList from './PokemonsList';

const Home = () => {
  const userName = useSelector((state) => state.userName);
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
      .then((res) => {
        console.log(res.data.results);
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <PokemonsList pokemons={pokemons} />
    </div>
  );
};

export default Home;
