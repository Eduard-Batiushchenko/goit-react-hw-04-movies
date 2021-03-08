import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { fetchSearchMovies } from '../../helpers/get-movies';
import MoviesList from '../MoviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: null,
    searchMovies: [],
  };
  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      fetchSearchMovies(search).then(films =>
        this.setState({ searchMovies: [...films] }),
      );
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    const { history } = this.props;
    if (prevState.searchQuery !== searchQuery) {
      await history.push({
        pathname: '/movies',
        search: `&query=${searchQuery}`,
        state: { query: searchQuery },
      });

      fetchSearchMovies(this.props.location.state.query).then(films =>
        this.setState({ searchMovies: [...films] }),
      );
    }
  }

  render() {
    return (
      <div>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />
        <div className="container">
          <ul className="movies-list">
            {this.state.searchMovies.map(film => (
              <MoviesList
                key={film.id}
                title={film.original_title}
                id={film.id}
                location={this.props.location}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MoviesPage;
