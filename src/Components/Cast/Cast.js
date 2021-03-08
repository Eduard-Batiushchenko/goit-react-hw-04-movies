import React, { Component } from 'react';
import { fetchCasts } from '../../helpers/get-movies';
import CastItem from '../CastItem/CastItem';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchCasts(movieId).then(cast => this.setState({ cast: [...cast] }));
  }
  render() {
    const { cast } = this.state;
    return (
      <div className="container">
        <ul className="cast-list">
          {cast.map(item => {
            if (item.profile_path) {
              return (
                <CastItem
                  key={item.id}
                  profile_path={item.profile_path}
                  name={item.name}
                  character={item.character}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Cast;
