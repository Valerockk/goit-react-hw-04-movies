const baseURL = "https://api.themoviedb.org/3";
const ApiKey = "ad0b88ab28871e2096a17eb113d09f1a";

const fetchPopularFilm = () => {
  return fetch(`${baseURL}/trending/movie/day?api_key=${ApiKey}`).then((res) =>
    res.json().then((entries) => entries.results)
  );
};

const fetchSearchFilm = (query)=>{
  return fetch(`${baseURL}/search/movie?api_key=${ApiKey}&query=${query}`).then((res) =>
  res.json()).then((entries) => entries.results);
}

const fetchFilmById = (filmId) => {
  return fetch(`${baseURL}/movie/${filmId}?api_key=${ApiKey}`).then((res) =>
    res.json()
  );
};

const fetchFilmCast = (filmId) => {
  return fetch(
    `${baseURL}/movie/${filmId}/credits?api_key=${ApiKey}`
  ).then((res) => res.json());
};

const fetchFilmReviews = (filmId) => {
  return fetch(
    `${baseURL}/movie/${filmId}/reviews?api_key=${ApiKey}`
  ).then((res) => res.json());
};

export default {
  fetchPopularFilm,
  fetchSearchFilm,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReviews,
};
