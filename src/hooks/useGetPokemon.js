import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetPokemon = (url, setErrorExist, setIsLoading) => {
  const [pokemon, setPokemon] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  useEffect(() => {
    setIsLoading(true);

    if (url) {
      getPokemon(url);
    }
  }, [url]);

  // Peticion pokemon
  const getPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setErrorExist(false);
        setPokemon(res.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorExist(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return [pokemon];
};

export default useGetPokemon;
