import '../styles/components/form.scss';
import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const RatingForm = ({ selectedMovie }) => {
  
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('data', {
      movieID: selectedMovie,
      rating: rating,
    })
    alert(`Rating submitted: ${rating}`);
  };

    return (
      <form className='form' onSubmit={handleSubmit}>
        <h5 className='form__title'>¿Te ha gustado?</h5>
        <Rating
          count={5}
          size={32}
          activeColor="#f4f80e"
          value={rating}
          onChange={handleRating}
        />
        <button className='form__btn' type="submit">Enviar</button>
      </form>
    );
}

export default RatingForm;