import '../styles/components/modal.scss';
import { gsap } from "gsap";
import { useLayoutEffect } from 'react'
import RatingForm from "./Form";

const Modal = ({ handleCloseModal, selectedMovie, urlImg }) => {

    // Animations GSAP
    useLayoutEffect(() => {
        
        const boxModal = document.querySelectorAll('.modal__card');
        gsap.from(boxModal, {
            duration: 0.5,
            scale: 0.1,
            y: 40,
            ease: "power1.inOut"
        })
        
    }, []);

    return (
        <div className="modal">
            <div className="modal__card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${urlImg + selectedMovie.poster_path})`}}>
                <button className="modal__close" onClick={handleCloseModal}><i className="uil uil-times"></i></button>
                <div className="modal__info">
                    <h3 className="modal__title">{selectedMovie.title}</h3>
                    <p className="modal__date">{selectedMovie.release_date}</p>
                    <p className="modal__description">{selectedMovie.overview}</p>
                    <p className="modal__vote">Valoración media: {selectedMovie.vote_average}</p>
                    <RatingForm selectedMovie={selectedMovie.id} />
                </div>
            </div>
        </div>
    );
}

export default Modal;