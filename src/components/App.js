//Styles
import '../styles/components/moviesList.scss';
import '../styles/components/header.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';


function App() {

  const urlAPI = 'https://api.themoviedb.org/3';
  const keyAPI = '729b6df65e3a07383ad2fe67ad350467';
  // const imgPath = 'https://image.tmdb.org/t/p/original';
  const urlImg = 'https://image.tmdb.org/t/p/original';

  // STATES

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  // FETCH

  const getDataMovies = async() => {
    const { data: { results },
    } = await axios.get(`${urlAPI}/movie/now_playing`, {
      params: {
        api_key: keyAPI,
      },
    });

    setMovies(results);
    setMovie(results[0]);
  }
  
  useEffect(() => {
    getDataMovies();
  }, []);


  return (
    <>
      <header className='header'>
        <h1 className="header__title">Movies Web</h1>
      </header>
      <main className="main">
        <section className='movies'>
          <ul className="movies__list">
            {movies.map((movie) =>
              <Movie key={movie.id} image={`${urlImg + movie.poster_path}`} title={movie.title} />
            )}
          </ul>
        </section>
      </main>
    </>
  
  );
}

export default App;