import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonsList = ({urlsPokemons}) => {

  // console.log(urlsPokemons);
  return (
    <div>
      { 
        urlsPokemons.map(url=><PokemonCard url={url} key={url}/>)
      }
    </div>
  );
};

export default PokemonsList;
