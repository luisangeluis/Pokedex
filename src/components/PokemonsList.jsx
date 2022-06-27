import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {
  // console.log(urlsPokemons);
  return (
    <article className="row">
      {pokemonByName ? (
        <PokemonCard pokemonByName={pokemonByName} />
      ) : (
        urlsPokemons.map((url) => <PokemonCard url={url} key={url} />)
      )}
    </article>
  );
};

export default PokemonsList;
