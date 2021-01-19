import React, { Component } from "react";
import theMoviesAPI from "../../servises/themoives-API";
import uuid from "react-uuid";
import { Link, Switch, Route } from "react-router-dom";
import routes from "../../router";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";
import MyLoader from "../Loader/Loader";

export default class MovieDetailsPage extends Component {
  state = {
    movie: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    theMoviesAPI
      .fetchFilmById(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push("/");
  };

  render() {
    const IMG = "https://image.tmdb.org/t/p/w500/";
    const { movie, loading } = this.state;
    const {
      poster_path,
      original_title,
      release_date,
      overview,
      genres,
      popularity,
    } = movie;
    const url = this.props.match.url;

    return (
      <div>
        {loading && <MyLoader />}
        {movie && (
          <>
            <button
              type="button"
              onClick={this.handleGoBack}
              className={styles.MovieDetailsPage_btn}
            >
              Go back
            </button>

            <div className={styles.MovieDetailsPage}>
              <img
                src={`${IMG}${poster_path}`}
                alt={original_title}
                className={styles.MovieDetailsPage_img}
              />
              <div>
                <p
                  className={styles.MovieDetailsPage_title}
                >{`${original_title} (${release_date})`}</p>
                <span>{`User Score: ${popularity}%`}</span>
                <p className={styles.MovieDetailsPage_title}>Overview</p>
                <span>{overview}</span>
                <p className={styles.MovieDetailsPage_title}>Genres</p>

                {genres && (
                  <ul className={styles.MovieDetailsPage_genres}>
                    {genres.map((genre) => (
                      <li key={uuid()}>{genre.name}</li>
                    ))}{" "}
                  </ul>
                )}
              </div>
            </div>
            <hr />
            <div>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to={`${url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <hr />
            </div>
          </>
        )}
        <Switch>
          <Route path={routes.cast} render={(props) => <Cast {...props} />} />
          <Route
            path={routes.reviews}
            render={(props) => <Reviews {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
