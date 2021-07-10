import {BASE_URL, MOVIE_KEY, IMAGE_URL as imageUrl} from '@env';
export const IMAGE_URL = imageUrl;

const handleResponse = async (response: Response) => {
  const text = await response.text();
  let data = text && JSON.parse(text);
  data.status = response.status;
  return data;
};

export type TMovies = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

// Movies
export const apiMovies = async (page = 1, typeMovies: TMovies) => {
  const uri = `${BASE_URL}/movie/${typeMovies}?page=${page}&api_key=${MOVIE_KEY}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return handleResponse(res);
};

// Search Movie
export const apiSearchMovies = async (page = 1, query = '') => {
  const uri = `${BASE_URL}/search/movie?page=${page}&query=${query}&api_key=${MOVIE_KEY}`;
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
  const uri = `${BASE_URL}/movie/${movieId}?api_key=${MOVIE_KEY}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return handleResponse(res);
};
