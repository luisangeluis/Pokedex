import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonCard = ({ url, pokemonByName,setErrorExist }) => {
  const navigate = useNavigate();
  const [pokemon] = useGetPokemon(url,setErrorExist);

  const goToDetail = (e) => {
    // console.log(e);
    navigate(`/pokedex/${e}`);
  };

  const getTypesDescription = (arrayTypes) => {
    let stringInfo = '';
    for (let i = 0; i < arrayTypes?.length; i++)
      i != arrayTypes.length - 1
        ? (stringInfo += `${arrayTypes[i].type.name} / `)
        : (stringInfo += arrayTypes[i].type.name);

    return stringInfo;
  };
  // console.log(pokemonByName);
  console.log(pokemon);

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`card my-2 my-md-3 bg-${
          pokemonByName
            ? pokemonByName.types[0].type.name
            : pokemon?.types[0].type.name
        }`}
      >
        <button
          onClick={() =>
            pokemonByName
              ? goToDetail(pokemonByName.id)
              : goToDetail(pokemon.id)
          }
          style={{ backgroundColor: 'transparent' }}
          className={`bg-${
            pokemonByName
              ? pokemonByName.types[0].type.name
              : pokemon?.types[0].type.name
          }`}
        >
          <img
            src={
              pokemonByName
                ? pokemonByName.sprites.other['official-artwork'].front_default
                : pokemon?.sprites.other['official-artwork'].front_default
            }
            className="img-fluid"
            alt=""
          />
          <div className="card-body bg-light rounded-2 border-light border-2">
            <div className="title mt-2 mt-md-3 card-name">
              {pokemonByName ? pokemonByName.name : pokemon?.name}
            </div>
            <p className="card-text">
              {pokemonByName
                ? getTypesDescription(pokemonByName?.types)
                : getTypesDescription(pokemon?.types)}
            </p>
            <p className="card-text">Type</p>
            <hr />
            <section className="card-text row">
              <div className="col-6">
                <p className="d-flex flex-column">
                  <span className="color-gray fw-bolder">hp</span>
                  {pokemonByName
                    ? pokemonByName.stats[0].base_stat
                    : pokemon?.stats[0].base_stat}
                </p>
                <p className="d-flex flex-column">
                  <span className="color-gray fw-bolder">Defense</span>
                  {pokemonByName
                    ? pokemonByName.stats[2].base_stat
                    : pokemon?.stats[2].base_stat}
                </p>
              </div>
              <div className="col-6">
                <p className="d-flex flex-column">
                  <span className="color-gray fw-bolder">Atack</span>
                  {pokemonByName
                    ? pokemonByName.stats[1].base_stat
                    : pokemon?.stats[1].base_stat}
                </p>
                <p className="d-flex flex-column">
                  <span className="color-gray fw-bolder">Speed</span>
                  {pokemonByName
                    ? pokemonByName.stats[5].base_stat
                    : pokemon?.stats[5].base_stat}
                </p>
              </div>
            </section>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
