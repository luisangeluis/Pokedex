import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SearchPokemon = ({ setPokemonByName }) => {
  const { register, handleSubmit } = useForm();

  const searchPokemon = (data) => {
    console.log(data.pokemonName);
    let pokemonName = data.pokemonName;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    getPokemonByName(url);
  };

  const getPokemonByName = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPokemonByName(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit(searchPokemon)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search pokemon"
          {...register('pokemonName', { required: true })}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchPokemon;
