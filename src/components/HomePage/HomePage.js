import React, { Component } from "react";
import theMoviesAPI from "../../servises/themoives-API";
import MoviesList from "../MoviesList/MovieList";
import MyLoader from "../Loader/Loader";

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    theMoviesAPI
      .fetchPopularFilm()
      .then((movies) => this.setState({ movies }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <>
        <h1>Trending today!</h1>

        {loading && <MyLoader />}
        
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
