import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const SelectPokemonTypes = ({ setUrlsPokemons, getPokemons, resetSelect }) => {
  const select = useRef(null);
  const [pokemonTypesOptions, setPokemonTypesOptions] = useState();

  useEffect(() => {
    getPokemonTypes();
  }, []);

  useEffect(() => {
    // if (resetSelect) {
    //   console.log('RESETEANDO');
    getResetSelect();
    // }
  }, [resetSelect]);

  const getPokemonTypes = () => {
    const url = 'https://pokeapi.co/api/v2/type';
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results);
        setPokemonTypesOptions(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getPokemonsByType = (e) => {
    console.log(e.target.value);
    let url = e.target.value;

    if (url != '') {
      if (url == 'todos') {
        console.log('hola');
        getPokemons();
      } else {
        axios
          .get(url)
          .then((res) => {
            console.log(res.data.pokemon);
            const urls = [];
            res.data.pokemon.forEach((element) => {
              // console.log(element.pokemon.url);
              urls.push(element.pokemon.url);
            });
            console.log(urls);
            setUrlsPokemons(urls);
          })
          .catch((error) => console.log(error));
      }
    }
  };

  const getResetSelect = () => {
    console.log(select.current);
    select.current.value = '';
  };

  return (
    <div className="col-md-6">
      <select onChange={getPokemonsByType} ref={select}>
        <option value="">Selecciona un tipo</option>
        <option value="todos">Todos los pokemones</option>
        {pokemonTypesOptions &&
          pokemonTypesOptions.map((option) => {
            return (
              <option value={option.url} key={option.url}>
                {option.name}
              </option>
            );
          })}
      </select>
      <button onClick={getResetSelect}>click</button>
    </div>
  );
};

export default SelectPokemonTypes;
