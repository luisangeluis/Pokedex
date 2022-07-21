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
  const [errorExist,setErrorExist] =useState(false);
  //Redux
  const userName = useSelector((state) => state.userName);
  //Custom Hook
  const[allUrls] =useGetAllUrls();
  //useState
  const [urlsByType,setUrlsByType] =useState();
  const[urlsToCall,setUrlsToCall] =useState();
  const [resetSelect,setResetSelect] =useState(false);

  useEffect(() => {
    if(allUrls){
      setUrlsToCall(allUrls)
    }
  },[allUrls])

  useEffect(() => {
    setErrorExist(false)
  }, [urlsToCall])
  
  useEffect(() => {
    
    if(urlsByType){
      setUrlsToCall(urlsByType)
    }
    
  }, [urlsByType])
  
  console.log(urlsToCall);
  
  return (
    <section className="row">
      <div className="col-12">
        <section className="row saludo my-2 my-md-3 p-2 p-md-3 rounded border border-3 border-light bg-dark text-white">
          <div className="col-12">
            Welcome "<span className=".subtitle-2">{userName}</span>". Here you
            can find your favorite pokemon.
          </div>
        </section>
        <section className="row filters p-2 p-md-3">
          <SearchPokemon setUrlsToCall={setUrlsToCall} setResetSelect={setResetSelect} resetSelect={resetSelect}/>
          <SelectPokemonTypes setUrlsByType={setUrlsByType} resetSelect={resetSelect}/>
        </section>
        {
          <PokemonsList urlsToCall={urlsToCall} setErrorExist={setErrorExist} errorExist={errorExist}/> 
        }
      </div>
    </section>
  );
};

export default Home;
