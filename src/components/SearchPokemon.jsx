import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SearchPokemon = ({ setPokemonByName, resetSelect, setResetSelect }) => {
  const { register, handleSubmit } = useForm();

  const searchPokemon = (data) => {
    console.log(data.pokemonName);
    let pokemonName = data.pokemonName;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    setResetSelect(!resetSelect);
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
    <div className="col-md-6 d-flex justify-content-center align-items-center p-2 p-md-3 rounded-2 w-50 mx-auto">
      <form onSubmit={handleSubmit(searchPokemon)}>
        <div className="input-group">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search pokemon"
            {...register('pokemonName', { required: true })}
            className="form-control"
          />
          <button className="btn btn-login">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchPokemon;
