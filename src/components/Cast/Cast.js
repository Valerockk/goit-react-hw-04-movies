import React, { Component } from "react";
import theMoviesAPI from "../../servises/themoives-API";
import styles from "./Cast.module.css";
import MyLoader from "../Loader/Loader";

export default class Cast extends Component {
  state = {
    casts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    theMoviesAPI
      .fetchFilmCast(this.props.match.params.movieId)
      .then((res) => this.setState({ casts: res.cast }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const IMG = "https://image.tmdb.org/t/p/w500";
    const IMG_undefiend =
      "https://c1.klipartz.com/pngpicture/275/115/sticker-png-man-silhouette-portrait-drawing-document-standing-male-human-thumbnail.png";
    const { casts, loading } = this.state;

    return (
      <>
        {loading && <MyLoader />}
        <div>
          <ul className={styles.Cast_list}>
            {casts &&
              casts.map((cast) => (
                <li key={cast.cast_id} className={styles.Cast_item}>
                  {cast.profile_path ? (
                    <img
                      src={`${IMG}${cast.profile_path}`}
                      alt={cast.name}
                      className={styles.Cast_img}
                    />
                  ) : (
                    <img
                      src={IMG_undefiend}
                      alt={cast.name}
                      className={styles.Cast_img}
                    />
                  )}
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
