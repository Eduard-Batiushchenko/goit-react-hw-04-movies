import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MoviesList.scss';

const MoviesList = ({ title, id, location }) => {
  return (
    <li className="movie-item">
      <Link
        to={{
          pathname: `./movies/${id}`,
          state: { from: location },
        }}
        className="movie-item-link"
      >
        {title}
      </Link>
    </li>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
