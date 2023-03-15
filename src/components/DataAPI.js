import axios from 'axios';
import { useEffect, useContext } from 'react';
import { DataContext } from '../application/Provider';
import Movie from './Movie';

const DataAPI = () => {

    const { data, setData } = useContext(DataContext);

    const urlAPI = 'https://api.themoviedb.org/3';
    const keyAPI = '729b6df65e3a07383ad2fe67ad350467';
    // const imgPath = 'https://image.tmdb.org/t/p/original';
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
        // setMovie(results[0]);
      }
        getDataMovies();
    }, []);
  
    return (
        <section className='movies'>
            <ul className="movies__list">
                {data.map((movie) =>
                    <Movie key={movie.id} image={`${urlImg + movie.poster_path}`} title={movie.title} />
                )}
            </ul>
      </section>
    );
};
  
export default DataAPI;