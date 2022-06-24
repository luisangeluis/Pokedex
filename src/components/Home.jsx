import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonsList from './PokemonsList';

const Home = () => {
  const userName = useSelector((state) => state.userName);
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
      .then((res) => {
        // console.log(res.data.results);
        const arrayPokemons = [];

        res.data.results.forEach((element) => {
          axios
            .get(element.url)
            .then((res) => {
              // console.log(res.data);
              arrayPokemons.push(res.data);
            })
            .catch((error) => console.log(error));
        });

        // setPokemons(arrrayPokemons[0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* <p>hola {userName}</p> */}

      {/* {pokemons?.map((pokemon, i) => {
        return <p key={i}>{pokemon.name}</p>;
      })} */}
    </div>
  );
};

export default Home;
