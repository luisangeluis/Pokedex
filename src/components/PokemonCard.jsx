import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetPokemon from '../hooks/useGetPokemon';
import Loader from './Loader';

const PokemonCard = ({ url, pokemonByName, setErrorExist }) => {
  const [isLoading, setIsLoading] = useState(true);
  //Hook navigate
  const navigate = useNavigate();
  //Custom hook
  const [pokemon] = useGetPokemon(url, setErrorExist, setIsLoading);

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
  // console.log(pokemon);

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`card my-2 my-md-3 position-relative bg-${pokemon?.types[0].type.name}`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={() => goToDetail(pokemon.id)}
            style={{ backgroundColor: 'transparent' }}
            className={`bg-${pokemon?.types[0].type.name}`}
          >
            <img
              src={pokemon?.sprites.other['official-artwork'].front_default}
              className="img-fluid"
              alt=""
            />
            <div className="card-body bg-light rounded-2 border-light border-2">
              <div className="title mt-2 mt-md-3 card-name">
                {pokemon?.name}
              </div>
              <p className="card-text">{getTypesDescription(pokemon?.types)}</p>
              <p className="card-text">Type</p>
              <hr />
              <section className="card-text row">
                <div className="col-6">
                  <p className="d-flex flex-column">
                    <span className="color-gray fw-bolder">hp</span>
                    {pokemon?.stats[0].base_stat}
                  </p>
                  <p className="d-flex flex-column">
                    <span className="color-gray fw-bolder">Defense</span>
                    {pokemon?.stats[2].base_stat}
                  </p>
                </div>
                <div className="col-6">
                  <p className="d-flex flex-column">
                    <span className="color-gray fw-bolder">Atack</span>
                    {pokemon?.stats[1].base_stat}
                  </p>
                  <p className="d-flex flex-column">
                    <span className="color-gray fw-bolder">Speed</span>
                    {pokemon?.stats[5].base_stat}
                  </p>
                </div>
              </section>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
