import '../styles/components/form.scss';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating-stars-component';
import ls from '../services/localStorage';

const RatingForm = ({ selectedMovie }) => {

  const [data, setData] = useState(ls.get('data', []) || []);
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    ls.set('data', data);
  }, [data]);

  const currentRating = data.find((obj) => obj.movieKey === selectedMovie)?.rating || 0;

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { movieKey: selectedMovie, rating };
    const updatedData = [...data.filter((obj) => obj.movieKey !== selectedMovie), newData];
    setData(updatedData);
    ls.set('data', updatedData);
    alert(`Rating submitted: ${rating}`);
  };

  return (
    <form className='form'>
      <h5 className='form__title'>¿Te ha gustado?</h5>
      <Rating
        count={5}
        size={32}
        activeColor="#f4f80e"
        value={currentRating}
        onChange={handleRating}
      />
      <button className='form__btn' type="submit" onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default RatingForm;