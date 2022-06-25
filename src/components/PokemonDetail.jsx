import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetPokemon from '../hooks/useGetPokemon'

const PokemonDetail = () => {
  const { id } = useParams()
  // console.log(url);
  const [pokemon, setPokemon] = useState();


  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    console.log(id);
    axios.get(url)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <p>id seleccionado{id}</p>
      {
        pokemon && pokemon.name
      }
    </div>
  )
}

export default PokemonDetail;