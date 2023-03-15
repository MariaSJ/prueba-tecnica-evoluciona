import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/movie.scss';

const Movie = ({image, title, movie, onMovieClick}) => {

    return (
        <li className="movie" >
            <img className="movie__img" src={image} alt={title} onClick={() => onMovieClick(movie)}></img>
            <h3 className="movie__title">{title}</h3>
        </li>
    );
}

export default Movie;