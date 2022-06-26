import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonCard = ({ url, pokemonByName }) => {

  const navigate = useNavigate();
  const [pokemon] = useGetPokemon(url);

  const goToDetail = (e) => {
    // console.log(e);
    navigate(`/pokedex/${e}`)
  }

  return (

    <div>
      {
        pokemonByName
          ? ''
          : (
            <button onClick={() => goToDetail(pokemon.id)}>
              <div>
                <img src={pokemon && pokemon.sprites.front_default} alt="" />
                <div>{pokemon?.name}</div>
              </div>
            </button>
          )
      }
    </div>
  );
};

export default PokemonCard;
