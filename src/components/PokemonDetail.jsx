import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const {id} =useParams()

  return (
    <div>id seleccionado{id}</div>
  )
}

export default PokemonDetail;