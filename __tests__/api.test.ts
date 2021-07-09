import {apiMovies, apiSearchMovies, apiMovieID} from '../src/services/api';

describe('Api test', () => {
  test('Api Movies', () => {
    expect(apiMovies(1, 'now_playing'));
  });

  test('Api Search Movies', () => {
    expect(apiSearchMovies(1, 'avengers'));
  });

  test('Api Movie ID', () => {
    expect(apiMovieID(123));
  });
});
