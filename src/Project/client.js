import axios from "axios";

//const request = axios.create({
//  withCredentials: true,
//});

//const MOVIE_API_URL = 'https://yts.am/';
const MOVIE_API_URL = 'https://www.omdbapi.com/';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
///?t=flash&y=2023&apikey=4de49c0d
export const findMoviesByTitle = async (title, year) => {
  const response = await axios
    .get(`${MOVIE_API_URL}?apikey=${API_KEY}&s=${title}&y=${year}`);
  return response.data.Search;
};

export const findMovieById = async (imdbID) => {
  const response = await axios
    .get(`${MOVIE_API_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  return response.data;
};