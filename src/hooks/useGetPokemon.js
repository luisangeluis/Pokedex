import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetPokemon = (url) => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        getPokemon(url.url)
      }, [])

    // Peticion pokemon
    const getPokemon = (url) => {
        axios.get(url)
            .then(res => {
                // console.log(res.data);
                setPokemon(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return [pokemon];   

}

export default useGetPokemon