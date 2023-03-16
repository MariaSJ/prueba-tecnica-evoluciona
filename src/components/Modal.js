import '../styles/components/modal.scss';

import RatingForm from "./Form";

const Modal = ({ handleCloseModal, selectedMovie, urlImg }) => {

    return (
        <div className="modal">
            <div className="modal__card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${urlImg + selectedMovie.poster_path})`}}>
                <button className="modal__close" onClick={handleCloseModal}><i className="uil uil-times"></i></button>
                <div className="modal__wraper">
                    {/* <img className="modal__img" src={`${urlImg + selectedMovie.poster_path}`} alt={selectedMovie.title}></img> */}
                    <div className="modal__info">
                        <h3 className="modal__title">{selectedMovie.title}</h3>
                        <p className="modal__date">{selectedMovie.release_date}</p>
                        <p className="modal__description">{selectedMovie.overview}</p>
                        <p className="modal__vote">Vote average: {selectedMovie.vote_average}</p>
                        <RatingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;