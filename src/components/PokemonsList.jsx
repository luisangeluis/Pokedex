import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

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

  // displayUsers.map((url) => {
  //   return <PokemonCard url={url} key={url} />;
  // });

  // if (urlsPokemons?.length < pokemonsPerPage) {
  //   arrayPokemons = [...urlsPokemons];
  // } else {
  //   const lastPokemon = currentPage * pokemonsPerPage;
  //   arrayPokemons = urlsPokemons.slice(
  //     lastPokemon - pokemonsPerPage,
  //     lastPokemon
  //   );
  // }

  // let arrayPages = [];

  // let quantityPages = Math.ceil(urlsPokemons.length / pokemonsPerPage);

  // const pagesPerBlock = 5;
  // let currentBlock = Math.ceil(currentPage / pagesPerBlock);
  // if (currentBlock * pagesPerBlock >= quantityPages) {
  //   for (
  //     let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
  //     i <= quantityPages;
  //     i++
  //   ) {
  //     arrayPages.push(i);
  //   }
  // } else {
  //   for (
  //     let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
  //     i <= currentBlock * pagesPerBlock;
  //     i++
  //   ) {
  //     arrayPages.push(i);
  //   }
  // }
  // console.log(arrayPokemons.length);
  // console.log(arrayPages);

  return (
    <article className="row pokemon-list">
      {pokemonByName ? (
        <PokemonCard pokemonByName={pokemonByName} />
      ) : (
        <>
          {/* <Pagination arrayPages={arrayPages} /> */}
          {/* {urlsPokemons?.map((url) => (
            <PokemonCard url={url} key={url} />
          ))} */}

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
    </article>
  );
};

export default PokemonsList;
