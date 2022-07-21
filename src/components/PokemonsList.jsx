import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

const PokemonsList = ({ urlsToCall, pokemonByName }) => {

  useEffect(() => {
   
  }, [urlsToCall])
  

  return (
    <section className='pokemon-list'>
      <div className="container">
        <div className="row">
          {
            urlsToCall?.map(url => <PokemonCard url={url} key={url}/>)
          }
        </div>
      </div>

    </section>
  )
};

export default PokemonsList;
