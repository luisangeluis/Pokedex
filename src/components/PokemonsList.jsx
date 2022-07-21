import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {

  const [currentPage, setCurrentPage] = useState(0);

  let arrayPokemons = [];
  const pokemonsPerPage = 20;
  const lastPokemon = currentPage * pokemonsPerPage;
  let pageCount = Math.ceil(urlsPokemons?.length / pokemonsPerPage);

  arrayPokemons = urlsPokemons?.slice(
    lastPokemon - pokemonsPerPage,
    lastPokemon
  );

  const displayUsers = urlsPokemons
    ?.slice(lastPokemon, lastPokemon + pokemonsPerPage)
    .map((url) => {
      return <PokemonCard url={url} key={url} />;
    });

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    pageCount = Math.ceil(urlsPokemons?.length / pokemonsPerPage);
  }, [urlsPokemons]);

  console.log(lastPokemon);
  console.log(pokemonsPerPage);
  console.log(displayUsers);

  return (
    <article className="row pokemon-list">
      {
        pokemonByName ? (
          <PokemonCard pokemonByName={pokemonByName} />
        ) : (
          <>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginate'}
              previousLinkClassName={'previous-btn'}
              nextLinkClassName={'next-btn'}
              disabledClassName={'pagination-disabled'}
              activeClassName={'pagination-active'}
            />
            {displayUsers}
          </>
        )
      }
    </article>
  );
};

export default PokemonsList;
