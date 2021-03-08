import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '4b8afadd5e83ecb986d10354c776b9e3';

function fetchTrendMovies() {
  return axios
    .get(`/trending/movie/day?api_key=${key}`)
    .then(respone => respone.data.results);
}

function fetchSearchMovies(searchQuery) {
  return axios
    .get(`/search/movie?api_key=${key}&query=${searchQuery}`)
    .then(({ data }) => data.results);
}

function fetchMovieDetails(id) {
  return axios
    .get(`/movie/${id}?api_key=${key}`)
    .then(response => response.data);
}

function fetchMovieImg(id) {
  return axios.get(`/movie/${id}/images?api_key=${key}`).then(response => {
    if (response.data.posters.length > 0) {
      return response.data.posters[0].file_path;
    }
  });
}
function fetchCasts(id) {
  return axios
    .get(`/movie/${id}/credits?api_key=${key}`)
    .then(({ data }) => data.cast);
}

function fetchReviews(id) {
  return axios
    .get(`/movie/${id}/reviews?api_key=${key}`)
    .then(({ data }) => data.results);
}

export {
  fetchTrendMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieImg,
  fetchCasts,
  fetchReviews,
};
