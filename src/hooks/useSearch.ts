import {useState, useEffect, useCallback} from 'react';
import _ from 'lodash';
import {useStateContext} from 'states/store';
import {apiSearchMovies} from 'services/api';
import {actionSearch} from 'states/action';

export default function useSearch() {
  const {state, dispatch} = useStateContext();
  const {search} = state;

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // On Typing
  const changeQuery = (text: string) => {
    setQuery(text);
    setPage(1);
  };

  // On Change Page
  const changePage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  // Get Movies by Search Query
  const getMoviesSearch = useCallback(
    _.debounce(async (text: string) => {
      setLoading(true);
      await apiSearchMovies(page, text)
        .then(res => {
          const results = _.result(res, 'results', []);
          const totalPages = _.result(res, 'totalPages', 1);
          setTotalPage(totalPages);

          let combineResult: any[] = [];
          if (page === 1) combineResult = results;
          else combineResult = [...search, ...results];

          dispatch(actionSearch(combineResult));
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, 500),
    [],
  );

  useEffect(() => {
    getMoviesSearch(query);
  }, [page, query]);

  return {changePage, changeQuery, loading, error, query};
}
