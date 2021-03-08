import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AppBar from './Components/AppBar/AppBar';
import MoviesPage from './Components/MoviesPage/MoviesPage';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:idMovie" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
