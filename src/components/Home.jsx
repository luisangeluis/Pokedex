import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonsList from './PokemonsList';
import SearchPokemon from './SearchPokemon';
import SelectPokemonTypes from './SelectPokemonTypes';

const Home = () => {
  //Redux
  const userName = useSelector((state) => state.userName);
  const [urlsPokemons, setUrlsPokemons] = useState();
  const [pokemonByName, setPokemonByName] = useState();

  useEffect(() => {
    if (!pokemonByName && !urlsPokemons) {
      getPokemons();
    }
  }, []);

  useEffect(() => {
    if (urlsPokemons) {
      setPokemonByName();
    }
  }, [urlsPokemons]);

  const getPokemons = () => {
    console.log('obteniendo todos los pokemon');
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => {
        // console.log(res);
        // console.log(res.data.results);
        let urls = [];
        res.data.results.forEach((url) => {
          // console.log(url.url);
          urls.push(url.url);
        });
        // console.log(urls);
        setUrlsPokemons(urls);
      })
      .catch((error) => console.log(error));
  };
  // console.log(urlsPokemons);
  return (
    <section className="row">
      <div className="col-12">
        <section className="row">
          Bienvenido "{userName}" aqui podras encontrar a tu pokemon favorito
        </section>
        <section className="row">
          <SearchPokemon setPokemonByName={setPokemonByName} />
          <SelectPokemonTypes
            setUrlsPokemons={setUrlsPokemons}
            getPokemons={getPokemons}
          />
        </section>
        {pokemonByName ? (
          <PokemonsList pokemonByName={pokemonByName} />
        ) : (
          urlsPokemons && <PokemonsList urlsPokemons={urlsPokemons} />
        )}
      </div>
    </section>
  );
};

export default Home;
