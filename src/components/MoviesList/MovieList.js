import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";

export default class MoviesList extends Component {
  render() {
    return (
      <ul className={styles.MoviesList}>
        {this.props.movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location },
              }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
