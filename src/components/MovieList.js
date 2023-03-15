import '../styles/components/movieList.scss';

import { useState } from 'react';
import Movie from './Movie';
import Modal from './Modal';

const MovieList = ({ data, urlImg }) => {
    
    // Search movie id and show modal

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    const handleOpenModal = (movie) => {
        const additionalData = data.find((m) => m.id === movie.id);
        setSelectedMovie(additionalData);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMovie({});
    };

    const renderModal = () => {
        return <Modal handleCloseModal={handleCloseModal} selectedMovie={selectedMovie} urlImg={urlImg} />
    };

    return (
        <>
        <section className='movies'>
            <ul className="movies__list">
                {data.map((movie) =>
                    <Movie key={movie.id} image={`${urlImg + movie.poster_path}`} title={movie.title} movie={movie} onMovieClick={handleOpenModal} />
                )}
            </ul>
        </section>
        {isModalOpen !== false ? renderModal() : ''}
        </>
    );
}

export default MovieList;