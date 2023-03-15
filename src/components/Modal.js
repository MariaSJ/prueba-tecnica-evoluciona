const Modal = ({ data, onClose }) => {

    return (
        <div className="modal">
            <button className="modal__close" onClick={onClose}>X</button>
            <img className="modal__img" src={data.poster_path} alt="">{data.title}</img>
            <h4 className="modal__title">{data.title}</h4>
            <p className="modal__description">{data.overview}</p>
        </div>
    );
}

export default Modal;