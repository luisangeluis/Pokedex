import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

const PokemonsList = ({ urlsToCall, setErrorExist, errorExist }) => {
  const [currentPage, setCurrentPage] = useState(0);

  let arrayPokemons = [];
  const pokemonsPerPage = 20;
  const lastPokemon = currentPage * pokemonsPerPage;
  let pageCount = Math.ceil(urlsToCall?.length / pokemonsPerPage);

  arrayPokemons = urlsToCall?.slice(lastPokemon - pokemonsPerPage, lastPokemon);

  const displayUsers = urlsToCall
    ?.slice(lastPokemon, lastPokemon + pokemonsPerPage)
    .map((url) => {
      return <PokemonCard url={url} key={url} />;
    });

  return (
    <section className="pokemon-list">
      <div className="container">
        <div className="row">
          {urlsToCall?.length <= 1 && errorExist == true ? (
            <h2 className="text-danger">Sin resultados</h2>
          ) : (
            urlsToCall?.map((url) => (
              <PokemonCard url={url} key={url} setErrorExist={setErrorExist} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PokemonsList;
