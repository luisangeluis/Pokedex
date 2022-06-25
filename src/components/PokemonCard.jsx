import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ url }) => {

  const [pokemon,setPokemon] =useState();

  useEffect(() => {
    getPokemon(url.url)
  }, [])

  // console.log(url.url);
  const getPokemon=(url)=>{
    axios.get(url)
      .then(res=>{
        // console.log(res.data);
        setPokemon(res.data)
      })
      .catch(error=>{
        console.log(error);
      });
  }
  return(

    <div>
      <img src={pokemon && pokemon.sprites.front_default} alt={`imagen de ${pokemon?.name}`} />
      <p>{pokemon?.name}</p>
    </div>
  );
};

export default PokemonCard;
