import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';

const PokemonCard = ({ url, pokemonByName }) => {
  const navigate = useNavigate();
  const [pokemon] = useGetPokemon(url);

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

  console.log(pokemonByName);
  console.log(pokemon);

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card my-2 my-md-3">
        <button
          onClick={() =>
            pokemonByName
              ? goToDetail(pokemonByName.id)
              : goToDetail(pokemon.id)
          }
        >
          <img
            src={
              pokemonByName
                ? pokemonByName.sprites.other['official-artwork'].front_default
                : pokemon && pokemon.sprites.front_default
            }
            className="img-fluid"
            alt=""
          />
          <div className="card-body">
            <div className="title">
              {pokemonByName ? pokemonByName.name : pokemon?.name}
            </div>
            <p className="card-text">
              {pokemonByName
                ? getTypesDescription(pokemonByName?.types)
                : getTypesDescription(pokemon?.types)}
            </p>
            <p className="card-text">Tipo</p>
            <hr />
            <section className="card-text row">
              <div className="col-6">
                <p className="d-flex flex-column">
                  <span>hp</span>
                  {pokemonByName
                    ? pokemonByName.stats[0].base_stat
                    : pokemon?.stats[0].base_stat}
                </p>
                <p className="d-flex flex-column">
                  <span>Defensa</span>
                  {pokemonByName
                    ? pokemonByName.stats[2].base_stat
                    : pokemon?.stats[2].base_stat}
                </p>
              </div>
              <div className="col-6">
                <p className="d-flex flex-column">
                  <span>Ataque</span>
                  {pokemonByName
                    ? pokemonByName.stats[1].base_stat
                    : pokemon?.stats[1].base_stat}
                </p>
                <p className="d-flex flex-column">
                  <span>Velocidad</span>
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
