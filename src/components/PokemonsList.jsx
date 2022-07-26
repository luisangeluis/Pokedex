import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';

const PokemonsList = ({ urlsToCall, setErrorExist, errorExist }) => {
  const [currentPage, setCurrentPage] = useState(0);

  let arrayPokemons = [];
  const pokemonsPerPage = 20;
  const lastPokemon = currentPage * pokemonsPerPage;
  let pageCount = Math.ceil(urlsToCall?.length / pokemonsPerPage);

  arrayPokemons = urlsToCall.slice(lastPokemon - pokemonsPerPage, lastPokemon);

  const displayUsers = urlsToCall
    .slice(lastPokemon, lastPokemon + pokemonsPerPage)
    .map((url) => {
      return <PokemonCard url={url} key={url} setErrorExist={setErrorExist} />;
    });

  const changePage = ({ selected }) => {
    setCurrentPage(selected);

    if (selected > pageCount) {
      setCurrentPage(0);
    }
  };

  useEffect(() => {
    pageCount = Math.ceil(urlsToCall.length / pokemonsPerPage);
    setCurrentPage(0);
  }, [urlsToCall]);

  return (
    <section className="pokemon-list">
      <div className="container">
        <div className="row">
          {urlsToCall?.length <= 1 && errorExist == true ? (
            <h2 className="text-danger">Sin resultados</h2>
          ) : (
            // (
            //   urlsToCall?.map((url) => (
            //     <PokemonCard url={url} key={url} setErrorExist={setErrorExist} />
            //   ))
            // )

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
          )}
        </div>
      </div>
    </section>
  );
};

export default PokemonsList;
