import RatingForm from "./Form";

const Modal = ({ handleCloseModal, selectedMovie, urlImg }) => {

    return (
        <div className="modal">
            <button className="modal__close" onClick={handleCloseModal}>X</button>
            <img className="modal__img" src={`${urlImg + selectedMovie.poster_path}`} alt={selectedMovie.title}></img>
            <h4 className="modal__title">{selectedMovie.title}</h4>
            <p className="modal__description">{selectedMovie.overview}</p>
            <RatingForm/>
        </div>
    );
}

export default Modal;