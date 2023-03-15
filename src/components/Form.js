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
      <form onSubmit={this.handleSubmit}>
        <h5>Did you enjoy it?</h5>
        <Rating
          count={5}
          size={24}
          activeColor="#ffd700"
          value={this.state.rating}
          onChange={this.handleRating}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RatingForm;