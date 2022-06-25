import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonCard = ({ url }) => {

  const navigate =useNavigate();
  const [pokemon] = useGetPokemon(url);
  
  const goToDetail = (e)=>{
      // console.log(e);
      navigate(`/pokedex/${e}`)
  }

  

  return (
    <div>
      <button onClick={()=>goToDetail(pokemon.id)}>
        <img src={pokemon && pokemon.sprites.front_default} alt={`imagen de ${pokemon?.name}`} />
        <p>{pokemon?.name}</p>
      </button>

    </div>
  );
};

export default PokemonCard;
