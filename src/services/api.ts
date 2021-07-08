const BASE_URL = 'https://api.themoviedb.org/3/movie';
const MOVIE_KEY = 'cf351551b4b72640578e20445eebffd6';

const handleResponse = async (response: Response) => {
  const text = await response.text();
  let data = text && JSON.parse(text);
  data.status = response.status;
  return data;
};

type TMovies = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

// Movies
export const apiMovies = async (page: number = 1, typeMovies: TMovies) => {
  const uri = `${BASE_URL}/${typeMovies}?page=${page}?api_key=${MOVIE_KEY}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return handleResponse(res);
};

// Get Movie by ID
export const apiMovieID = async (movieId: number) => {
  const uri = `${BASE_URL}/${movieId}?api_key=${MOVIE_KEY}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return handleResponse(res);
};
