import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';

const Home = () => {
  //Redux
  const userName = useSelector((state) => state.userName);
  const [urlsPokemons, setUrlsPokemons] = useState();
  const [pokemonByName,setPokemonByName] = useState();
  
  useEffect(() => {

    if(pokemonByName){
      
    }else{
      getPokemons();

    }
  }, [pokemonByName]);

  // useEffect(()=>{

  // },[pokemonByName])

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => {
        // console.log(res);
        setUrlsPokemons(res.data.results)
      })
      .catch((error) => console.log(error));
  }

  

  // console.log(urlsPokemons);
  console.log(pokemonByName);
  return (
    
    <div>
      <SearchPokemon setPokemonByName={setPokemonByName}/>
      {
        pokemonByName
        ?<PokemonsList pokemonByName={pokemonByName} /> 
        :<PokemonsList urlsPokemons={urlsPokemons} />
      }
    </div>
  );
}

export default Home;
