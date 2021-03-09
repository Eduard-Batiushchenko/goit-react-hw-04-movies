import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(
  () =>
    import(
      './Components/HomePage/HomePage'
    ) /* webpackChunkName: "home-page" */,
);
const MoviesPage = lazy(
  () =>
    import(
      './Components/MoviesPage/MoviesPage'
    ) /* webpackChunkName: "movies-page" */,
);
const MovieDetailsPage = lazy(
  () =>
    import(
      './Components/MovieDetailsPage/MovieDetailsPage'
    ) /* webpackChunkName: "movies-details-page" */,
);

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:idMovie" component={MovieDetailsPage} />
        </Suspense>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
