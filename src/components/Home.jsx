import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PokemonsList from './PokemonsList';

const Home = ({saludo}) => {
  const userName = useSelector((state) => state.userName);
  const [urlsPokemons, setUrlsPokemons] = useState();
  // const [pokemons, setPokemons] = useState();


  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        // console.log(res);
        setUrlsPokemons(res.data.results)
      })
      .catch((error) => console.log(error));
  }

  // console.log(urlsPokemons);
  return (
    <div>
      <p>Soy el home</p>
    </div>
  );
}

export default Home;
