import React from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ urlsPokemons }) => {


  return (
    <div>
      {urlsPokemons?.map((url, i) => <PokemonCard url={url} key={url.url} />)}
    </div>
  );
};

export default PokemonsList;
