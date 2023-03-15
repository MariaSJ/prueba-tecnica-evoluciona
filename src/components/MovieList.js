import { useState } from 'react';
import Movie from './Movie';
import Modal from './Modal';

const MovieList = ({ data, urlImg }) => {
    
    // Search movie id

    // const foundedMovie = data.find((movie) => movie.id === parseInt(movieId));

    // Show modal

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
        <section className='movies'>
            <ul className="movies__list">
                {data.map((movie) =>
                    <Movie key={movie.id} image={`${urlImg + movie.poster_path}`} title={movie.title} handleModal={handleModal} />
                )}
            </ul>
        </section>
            {showModal && <Modal key={data.id} data={data} onClose={handleModal} />}
        </>
    );
}

export default MovieList;