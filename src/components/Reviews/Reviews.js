import React, { Component } from "react";
import theMoviesAPI from "../../servises/themoives-API";
import MyLoader from "../Loader/Loader";

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    theMoviesAPI
      .fetchFilmReviews(this.props.match.params.movieId)
      .then((res) => this.setState({ reviews: res.results }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;

    return (
      <>
        {loading && <MyLoader />}
        <ul>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <p>We don`t have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}
