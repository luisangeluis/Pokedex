import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGetAllUrls from '../hooks/useGetAllUrls';
import Loader from './Loader';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';
import SelectPokemonTypes from './SelectPokemonTypes';

const Home = () => {
  //Loader
  const [isLoading, setIsLoading] = useState(true);
  //Redux
  const userName = useSelector((state) => state.userName);
  //Custom Hook
  const[allUrls] =useGetAllUrls();
  //useState
  const[urlsToCall,setUrlsToCall] =useState();

  useEffect(() => {
    if(allUrls){
      setUrlsToCall(allUrls)
    }
  },[allUrls])

  console.log(urlsToCall);
  
  return (
    <section className="row">
      <div className="col-12">
        <section className="row saludo my-2 my-md-3 p-2 p-md-3 rounded border border-3 border-light">
          <div className="col-12">
            Welcome "<span className=".subtitle-2">{userName}</span>". Here you
            can find your favorite pokemon.
          </div>
        </section>
        <section className="row filters p-2 p-md-3">
          <SearchPokemon setUrlsToCall={setUrlsToCall}/>
          <SelectPokemonTypes setUrlsToCall={setUrlsToCall}/>
        </section>
        {
          <PokemonsList urlsToCall={urlsToCall}/> 
        }
      </div>
    </section>
  );
};

export default Home;
