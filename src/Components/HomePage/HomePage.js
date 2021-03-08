import React, { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import { fetchTrendMovies } from '../../helpers/get-movies';
import './HomePage.scss';

class HomePage extends Component {
  state = {
    trendFilms: [],
  };

  componentDidMount() {
    fetchTrendMovies().then(response =>
      this.setState({ trendFilms: [...response] }),
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Trending today</h1>
        <ul className="movies-list">
          {this.state.trendFilms.map(film => {
            return (
              <MoviesList
                key={film.id}
                title={film.original_title}
                id={film.id}
                location={this.props.location}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage;
