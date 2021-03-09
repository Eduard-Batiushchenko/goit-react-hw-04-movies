import React from 'react';
import PropTypes from 'prop-types';

const CastItem = ({ profile_path, name, character }) => {
  return (
    <li className="cast-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
        height="200"
      />
      <h2 className="cast-title">{name}</h2>
      <p className="cast-text">{character}</p>
    </li>
  );
};

CastItem.propTypes = {
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastItem;
