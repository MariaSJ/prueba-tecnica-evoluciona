import axios from 'axios';
import { useEffect, useContext } from 'react';
import { DataContext } from '../application/Provider';

import MovieList from './MovieList';

const DataAPI = () => {

    // Data API

    const { data, setData } = useContext(DataContext);

    const urlAPI = 'https://api.themoviedb.org/3';
    const keyAPI = '729b6df65e3a07383ad2fe67ad350467';
    const urlImg = 'https://image.tmdb.org/t/p/original';
  
    useEffect(() => {
        const getDataMovies = async() => {
            const { data: { results },
            } = await axios.get(`${urlAPI}/movie/now_playing`, {
            params: {
                api_key: keyAPI,
            },
            });
            
            setData(results);
        }

        getDataMovies();

    }, []);
  
    return (
        <MovieList data={data} urlImg={urlImg} /> 
    );
};
  
export default DataAPI;