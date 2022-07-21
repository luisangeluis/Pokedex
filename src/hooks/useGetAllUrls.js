import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllUrls = () => {
  const [allUrls, setAllUrls] = useState();
  const [allPokemons,setAllPokemons] =useState();
  
  useEffect(() => {
    getAllUrls();
  }, [])

  const getAllUrls = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
      .then((res) => {
        let urls = [];

        res.data.results.forEach(url => {
          urls.push(url.url);
        })

        setAllUrls(urls)
      })
      .catch((error) => console.log(error))
  }


  return [allUrls];
}

export default useGetAllUrls