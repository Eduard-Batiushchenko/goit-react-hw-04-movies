import React, { Component } from 'react';
import { fetchReviews } from '../../helpers/get-movies';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchReviews(movieId).then(reviews =>
      this.setState({ reviews: [...reviews] }),
    );
  }
  render() {
    const { reviews } = this.state;
    return (
      <div className="container">
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <ReviewsItem
                key={review.id}
                author={review.author}
                content={review.content}
              />
            ))}
          </ul>
        ) : (
          <p>We dont have any reviews for this film.</p>
        )}
      </div>
    );
  }
}

export default Reviews;
