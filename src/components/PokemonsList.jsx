import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonsList = ({ urlsPokemons, pokemonByName }) => {
  const [currentPage, setCurrentPage] = useState(1);

  let pokemonsToShow = []
  const pokemonsPerPage = 30;

  if (urlsPokemons?.length < pokemonsPerPage) {
    pokemonsToShow = [...urlsPokemons]

  } else {
    const lastPokemon = currentPage * pokemonsPerPage;
    pokemonsToShow = urlsPokemons?.slice(lastPokemon - pokemonsPerPage, lastPokemon)
  }

  let arrayPages = [];
  let quantityPages = Math.ceil(urlsPokemons?.length / pokemonsPerPage);
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage, pagesPerBlock)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }

  return (
    <article className="row pokemon-list">
      {pokemonByName ? (
        <PokemonCard pokemonByName={pokemonByName} />
      ) : (
        <>
          <Pagination arrayPages={arrayPages} currentPage={currentPage} setCurrentPage={setCurrentPage} quantityPages={quantityPages} />
          {
            pokemonsToShow?.map((url) => <PokemonCard url={url} key={url} />)
          }
        </>

      )}
    </article>
  );
};

export default PokemonsList;
