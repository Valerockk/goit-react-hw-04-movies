import React, {lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import routes from "../router";

import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

// const MovieDetailsPage = lazy(() =>
//   import("./MovieDetailsPage/MovieDetailsPage")
// );

const App = () => (
  <Layout>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage}></Route>
        <Route path={routes.movies} exact component={MoviesPage}></Route>
        <Route path={routes.moviesDetails} component={MovieDetailsPage}></Route>
        <Route path={routes.cast} component={Cast}></Route>
        <Route path={routes.reviews} component={Reviews}></Route>
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
