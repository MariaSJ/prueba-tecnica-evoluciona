import '../styles/components/form.scss';
import React from 'react';
import Rating from 'react-rating-stars-component';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleRating = (value) => {
    this.setState({
      rating: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Rating submitted: ${this.state.rating}`);
  };

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <h5 className='form__title'>Did you enjoy it?</h5>
        <Rating
          count={5}
          size={32}
          activeColor="#6d1380"
          value={this.state.rating}
          onChange={this.handleRating}
        />
        <button className='form__btn' type="submit">Send</button>
      </form>
    );
  }
}

export default RatingForm;