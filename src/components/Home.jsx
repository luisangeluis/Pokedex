import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetAllUrls from '../hooks/useGetAllUrls';
import Loader from './Loader';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';
import SelectPokemonTypes from './SelectPokemonTypes';

const Home = () => {
  //Loader
  const [errorExist, setErrorExist] = useState(false);
  //Redux
  const userName = useSelector((state) => state.userName);
  //Custom Hook
  const [allUrls] = useGetAllUrls();
  //useState
  const [urlsByType, setUrlsByType] = useState();
  const [urlsToCall, setUrlsToCall] = useState();
  const [resetSelect, setResetSelect] = useState(false);
  //useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    if (allUrls) {
      setUrlsToCall(allUrls);
    }
  }, [allUrls]);

  useEffect(() => {
    if (urlsByType) {
      setUrlsToCall(urlsByType);
    }
  }, [urlsByType]);

  useEffect(() => {
    if (urlsToCall) {
      setErrorExist(false);
    }
  }, [urlsToCall]);

  const logOut = () => {
    localStorage.removeItem('userName');
    navigate('/');
    // console.log('logOut');
  };
  // console.log(urlsToCall);

  return (
    <section className="row">
      <div className="col-12">
        <section className="row saludo my-2 my-md-3 p-2 p-md-3 rounded border border-3 border-light text-white bg-dark">
          <div className="col-8">
            Welcome "<span className=".subtitle-2">{userName}</span>". Here you
            can find your favorite pokemon.
          </div>
          <div className="col-4 text-center d-flex justify-content-center align-items-center">
            <button className="btn btn-logout btn-sm" onClick={logOut}>
              Log Out
            </button>
          </div>
        </section>
        <section className="row filters p-2 p-md-3 border border-light border-3">
          <SearchPokemon
            setUrlsToCall={setUrlsToCall}
            setResetSelect={setResetSelect}
            resetSelect={resetSelect}
          />
          <SelectPokemonTypes
            setUrlsByType={setUrlsByType}
            resetSelect={resetSelect}
          />
        </section>
        {urlsToCall && (
          <PokemonsList
            urlsToCall={urlsToCall}
            setErrorExist={setErrorExist}
            errorExist={errorExist}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
