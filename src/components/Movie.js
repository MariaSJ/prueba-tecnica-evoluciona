import { gsap } from "gsap";
import { useLayoutEffect } from 'react'
import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/movie.scss';

const Movie = ({ image, title, movie, handleOpenModal }) => {
    
    // Animations GSAP
    useLayoutEffect(() => {
        
        const boxMovie = document.querySelectorAll('.movie');
        gsap.to(boxMovie, {
            y: 30,
            duration: 0.2,
            stagger: {
                each: 0.2,
                from: 1
            }
        })
    }, []);

    return (
        <li className="movie">
            <img className="movie__img" src={image} alt={title} onClick={() => handleOpenModal(movie)}></img>
            <h3 className="movie__title">{title}</h3>
        </li>
    );
}

export default Movie;