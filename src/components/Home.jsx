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

    if(!pokemonByName){
      getPokemons();
    }
  }, [pokemonByName]);

  useEffect(() => {
    if(urlsPokemons){
      setPokemonByName()

    }
  }, [urlsPokemons])


  const getPokemons = () => {
    console.log('obteniendo todos los pokemon');
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => {
        // console.log(res.data.results);
        let urls = [];
        res.data.results.forEach(url => {
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
      <SearchPokemon setPokemonByName={setPokemonByName} />
      <SelectPokemonTypes setUrlsPokemons={setUrlsPokemons} getPokemons={getPokemons} />
      {
        pokemonByName
          ? <PokemonsList pokemonByName={pokemonByName} />
          : urlsPokemons && <PokemonsList urlsPokemons={urlsPokemons} />
      }
    </div>
  );
}

export default Home;
