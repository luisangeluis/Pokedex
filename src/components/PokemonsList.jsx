import React from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ urlsPokemons,pokemonByName }) => {


  return (
    <div>
      { 
        pokemonByName 
        ? <PokemonCard pokemonByName={pokemonByName}/>
        :urlsPokemons?.map((url, i) => <PokemonCard url={url} key={url?.url} />)
      }
    </div>
  );
};

export default PokemonsList;
