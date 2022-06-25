import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';

const Home = ({saludo}) => {
  const userName = useSelector((state) => state.userName);
  const [urlsPokemons, setUrlsPokemons] = useState();
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => {
        // console.log(res);
        setUrlsPokemons(res.data.results)
      })
      .catch((error) => console.log(error));
  }

  // console.log(urlsPokemons);
  return (
    
    <div>
      <SearchPokemon />
      {
        urlsPokemons && <PokemonsList urlsPokemons={urlsPokemons} />
      }
    </div>
  );
}

export default Home;
