import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();
  // console.log(url);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(id);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <section className="row pokemon-details">
      <div className="col-md-8 my-2 my-md-3">
        <div className="row">
          <div className="col-12">
            <section className="card p-2 p-md-3">
              <img
                src={pokemon?.sprites.other['official-artwork'].front_default}
                alt={`imagen de ${pokemon?.name}`}
                className="img-fluid"
              />
              <div className="card-body">
                <div className="d-flex justify-content-around">
                  <p>hola</p>
                  <p>hola</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="card-text m-0">hola</p>
                  <hr />
                  <p className="card-text m-0 w-25 mx-auto">hola</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row my-2 my-md-3">
          <div className="col-md-6 my-2 my-md-3">
            <div className="row">
              <div className="col-12">
                <section className="card p-2 p-md-3">
                  <div className="card-body">
                    <div className="card-title m-0 fw-bold">Type</div>
                    <ul className="d-flex justify-content-center align-items-center">
                      {pokemon?.types.map((type) => (
                        <li className="p-2 p-md-3">
                          <button
                            className={`btn text-white bg-${type.type.name}`}
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
                <section className="card">
                  <div className="card-body">
                    <div className="card-title m-0 fw-bold">Habilities</div>
                    <ul className="d-flex justify-content-center align-items-center">
                      {pokemon?.abilities.map((ability) => (
                        <li className="p-2 p-md-3">
                          <button className={`btn border border-secondary`}>
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
            <section className="card movements">
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <hr className="d-inline w-50" /> Movements
                </div>
                <ul>
                  {pokemon?.moves.map((move) => (
                    <li>
                      {move.move.name} <hr />{' '}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetail;
