import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

const PokemonsList = ({ urlsToCall, setErrorExist, errorExist }) => {
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
