import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} key={i} />
      ))}
    </div>
  );
};

export default PokemonsList;
