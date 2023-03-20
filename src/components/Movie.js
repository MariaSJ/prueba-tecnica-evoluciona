import '../styles/components/movie.scss';
import { gsap } from "gsap";
import { useLayoutEffect } from 'react';

const Movie = ({ image, title, movie, handleOpenModal }) => {
    
    // Animations GSAP
    useLayoutEffect(() => {
        const boxMovie = document.querySelectorAll('.movie');
        gsap.to(boxMovie, {
            y: 25,
            duration: 0.2,
            stagger: {
                each: 0.2,
                from: "center"
            }
        })
    })

    return (
        <li className="movie">
            <img className="movie__img" src={image} alt={title} onClick={() => handleOpenModal(movie)}></img>
            <h3 className="movie__title">{title}</h3>
        </li>
    );
}

export default Movie;