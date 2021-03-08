import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </li>
  );
};
ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsItem;
