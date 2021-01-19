import React, { Component } from "react";
import theMoviesAPI from "../../servises/themoives-API";
import MoviesList from "../MoviesList/MovieList";
import styles from "./MoviesPage.module.css";
import MyLoader from "../Loader/Loader";

export default class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const value = this.state.value;

    if (value) {
      this.fetchMovies(this.state.value);
    }
  }

  fetchMovies = (value) => {
    this.setState({ loading: true });

    theMoviesAPI
      .fetchSearchFilm(value)
      .then((res) => this.setState({ movies: res }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.fetchMovies(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value, movies, loading } = this.state;

    return (
      <div className={styles.MoviesPage}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            className={styles.SearchForm_input}
          />
          <button type="button" className={styles.SearchForm_button}>
            Search
          </button>
        </form>

        {loading && <MyLoader />}

        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
    );
  }
}
