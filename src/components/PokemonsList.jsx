import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonsList = ({urlsPokemons,pokemonByName}) => {

  // console.log(urlsPokemons);
  return (
    <div>
      { 
        pokemonByName 
        ? <PokemonCard pokemonByName={pokemonByName}/>
        : urlsPokemons.map(url=><PokemonCard url={url} key={url}/>)
      }
    </div>
  );
};

export default PokemonsList;
