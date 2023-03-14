import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/movie.scss';

const Movie = (props) => {

    return (
        <li className="movie">
            <img className="movie__img" src={props.image} alt={props.title}></img>
            <h3 className="movie__title">{props.title}</h3>
        </li>
    );
}

export default Movie;