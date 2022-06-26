import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';
import SelectPokemonTypes from './SelectPokemonTypes';

const Home = () => {
  //Redux
  const userName = useSelector((state) => state.userName);
  const [urlsPokemons, setUrlsPokemons] = useState();
  const [pokemonByName, setPokemonByName] = useState();

  useEffect(() => {

    if(pokemonByName){

    }else{
      getPokemons();

    }
  }, []);

  
  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => {
        // console.log(res.data.results);
        let urls=[];
        res.data.results.forEach(url=>{
          // console.log(url.url);
          urls.push(url.url)
        })
        // console.log(urls);
        setUrlsPokemons(urls);
      })
      .catch((error) => console.log(error));
  }
  // console.log(urlsPokemons);
  return (
    <div>
      <SearchPokemon setPokemonByName={setPokemonByName}/>
      <SelectPokemonTypes setUrlsPokemons={setUrlsPokemons} getPokemons={getPokemons}/>
      {
        pokemonByName 
        ? ''
        :urlsPokemons && <PokemonsList urlsPokemons={urlsPokemons}/>
      }
    </div>
  );
}

export default Home;
