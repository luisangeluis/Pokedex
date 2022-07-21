import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const SelectPokemonTypes = ({setUrlsByType,resetSelect}) => {
  const select = useRef(null);
  const [pokemonTypesOptions, setPokemonTypesOptions] = useState();

  useEffect(() => {
    getPokemonTypes();
  }, []);

  useEffect(() => {
    // if (resetSelect) {
    //   console.log('RESETEANDO');
    getResetSelect();
    // }
  }, [resetSelect]);

  const getPokemonTypes = () => {
    const url = 'https://pokeapi.co/api/v2/type';
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.results);
        setPokemonTypesOptions(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getUrlsByType=(e)=>{
    console.log(e.target.value);
    let urlType = e.target.value;

    if(urlType!=='' && urlType!='todos'){
      axios.get(urlType)
        .then(res=>{
          console.log(res.data.pokemon);
          let urls = [];
          res.data.pokemon.forEach(url=>{
            console.log(url.pokemon.url);
            urls.push(url.pokemon.url);
          })
          setUrlsByType(urls);
        })
        .catch(error=>{console.log(error);})
    }

    if(urlType=='todos'){
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
      .then((res) => {
        let urls = [];

        res.data.results.forEach(url => {
          urls.push(url.url);
        })

        setUrlsByType(urls)
      })
      .catch((error) => console.log(error))
    }

  }

  

  // const getPokemonsByType = (e) => {
  //   // console.log(e.target.value);
  //   let url = e.target.value;

  //   if (url != '') {
  //     if (url == 'todos') {
  //       console.log('hola');
  //       getPokemons();
  //     } else {
  //       axios
  //         .get(url)
  //         .then((res) => {
  //           console.log(res.data.pokemon);
  //           const urls = [];
  //           res.data.pokemon.forEach((element) => {
  //             // console.log(element.pokemon.url);
  //             urls.push(element.pokemon.url);
  //           });
  //           // console.log(urls);
  //           setUrlsPokemons(urls);
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   }
  // };

  const getResetSelect = () => {
    console.log(select.current);
    select.current.value = '';
  };

  return (
    <div className="col-md-6 d-flex justify-content-center align-items-center p-2 p-md-3">
      <select
        onChange={getUrlsByType}
        ref={select}
        className="form-select w-50"
      >
        <option value="">Select a type</option>
        <option value="todos">All pokemons</option>
        {pokemonTypesOptions &&
          pokemonTypesOptions.map((option) => {
            return (
              <option value={option.url} key={option.url}>
                {option.name}
              </option>
            );
          })}
      </select>
      {/* <button onClick={getResetSelect}>click</button> */}
    </div>
  );
};

export default SelectPokemonTypes;
