import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {
  return (
    <article className="row pokemon-list">
      {pokemonByName ? (
        <PokemonCard pokemonByName={pokemonByName} />
      ) : (
        urlsPokemons.map((url) => <PokemonCard url={url} key={url} />)
      )}
    </article>
  );
};

export default PokemonsList;
