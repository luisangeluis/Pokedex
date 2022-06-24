import React from 'react';

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return <div>{pokemon.name}</div>;
};

export default PokemonCard;
