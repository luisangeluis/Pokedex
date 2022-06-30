import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PokemonCard from './PokemonCard';

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {
  const [elements, setElements] = useState(urlsPokemons);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 20;

  let pagesVisited = pageNumber * userPerPage;
  let pageCount = Math.ceil(elements.length / userPerPage);
  let displayUsers = elements.slice(pagesVisited, pagesVisited + userPerPage);

  useEffect(() => {
    setElements(urlsPokemons);

    pagesVisited = pageNumber * userPerPage;
    pageCount = Math.ceil(elements.length / userPerPage);
    displayUsers = elements.slice(pagesVisited, pagesVisited + userPerPage);
  }, [urlsPokemons]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <article className="row pokemon-list">
      {pokemonByName ? (
        <PokemonCard pokemonByName={pokemonByName} />
      ) : (
        <>
          <div className="pagination container">
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'ul-pagination'}
              previousLinkClassName={'btn'}
              nextLinkClassName={'btn'}
              disabledClassName={'pagination-disabled'}
              activeClassName={'pagination-active'}
            />
          </div>
          {displayUsers.map((url) => (
            <PokemonCard url={url} key={url} />
          ))}
        </>
      )}
    </article>
  );
};

export default PokemonsList;
