import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieImg } from '../../helpers/get-movies';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import './MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    film: [],
  };
  async componentDidMount() {
    const idMovie = this.props.match.params.idMovie;
    await fetchMovieDetails(idMovie).then(response =>
      this.setState({
        film: response,
      }),
    );
    await fetchMovieImg(idMovie).then(img =>
      this.setState({
        film: {
          ...this.state.film,
          img: img,
        },
      }),
    );
  }
  render() {
    const {
      title,
      img,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = this.state.film;

    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.props.history.location.state
              ? this.props.history.push(
                  this.props.history.location.state.from.pathname +
                    this.props.history.location.state.from.search,
                )
              : this.props.history.push('/');
          }}
        >
          Вернуться назад
        </button>
        <div className="movie-details">
          <div className="movie-details-img-container">
            {img && (
              <img
                className="movie-details-image"
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt=""
              />
            )}
          </div>
          <div className="movie-details-text-container">
            <h1>
              {title} ({release_date && release_date.slice(0, 4)})
            </h1>
            <p>User score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            {genres && genres.length > 0 && <h2>Genres</h2>}
            {genres &&
              genres.length > 0 &&
              genres.map(genre => {
                return (
                  <p className="genre-text" key={genre.id}>
                    {genre.name}
                  </p>
                );
              })}
          </div>
        </div>
        <ul className="movie-details-list">
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/cast`,
                state: this.props.history.location.state,
              }}
              className="movie-details-link"
              activeClassName="selected"
            >
              Casts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/reviews`,
                state: this.props.history.location.state,
              }}
              className="movie-details-link"
              activeClassName="selected"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
