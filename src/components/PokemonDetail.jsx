import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(id);
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <section className="row pokemon-details position-relative">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="col-md-8 my-2 my-md-3">
            <div className="row">
              <div className="col-12">
                <section
                  className={`card p-2 p-md-3 main-card_details bg-${pokemon?.types[0].type.name}`}
                >
                  <img
                    src={
                      pokemon?.sprites.other['official-artwork'].front_default
                    }
                    alt={`imagen de ${pokemon?.name}`}
                    className="img-fluid"
                  />
                  <div className="card-body bg-light">
                    <div className="d-flex justify-content-around alig-items-center">
                      <div>
                        <p className="fw-bold m-0">{pokemon?.weight}</p>
                        <p className="color-gray m-0">Weight</p>
                      </div>
                      <div>
                        <p className="fw-bold m-0">{pokemon?.height}</p>
                        <p className="color-gray m-0">Height</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="card-text m-0 fw-bold fs-2">
                        {pokemon?.name}
                      </p>
                      <hr className="m-0" />
                      <p className="card-text my-1 mx-auto fs-3 border border-1">
                        #{pokemon?.id}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="row my-2 my-md-3">
              <div className="col-md-6 my-2 my-md-3">
                <div className="row">
                  <div className="col-12">
                    <section
                      className="card p-2 p-md-3 border border-2 text-white"
                      style={{ backgroundColor: '#212529' }}
                    >
                      <div className="card-body">
                        <div className="card-title m-0 fw-bold">Type</div>
                        <ul className="d-flex justify-content-center align-items-center flex-wrap">
                          {pokemon?.types.map((type) => (
                            <li className="p-2 p-md-3" key={type.type.name}>
                              <button
                                className={`btn text-white bg-${type.type.name}  border-1`}
                              >
                                {type.type.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-2 my-md-3">
                <div className="row">
                  <div className="col-12">
                    <section
                      className="card p-2 p-md-3 border border-2 text-white"
                      style={{ backgroundColor: '#212529' }}
                    >
                      <div className="card-body">
                        <div className="card-title m-0 fw-bold">Habilities</div>
                        <ul className="d-flex justify-content-center align-items-center flex-wrap">
                          {pokemon?.abilities.map((ability) => (
                            <li
                              className="p-2 p-md-3"
                              key={ability.ability.name}
                            >
                              <button
                                className={`btn border border-light border-2 text-white`}
                              >
                                {ability.ability.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 my-md-3">
            <div className="row">
              <div className="col-12">
                <section className={`card movements bg-${pokemon?.types[0].type.name}`}>
                  <div className="card-body text-white">
                    <div className="card-title text-center fw-bold">
                      <hr className="d-inline w-50" /> Movements
                    </div>
                    <ul className="text-dark fw-bold">
                      {pokemon?.moves.map((move) => (
                        <li key={move.move.name} className="bg-light">
                          {move.move.name} <hr />{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PokemonDetail;
