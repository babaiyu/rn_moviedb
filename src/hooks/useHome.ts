import {useState, useEffect} from 'react';
import _ from 'lodash';
import {useStateContext} from 'states/store';
import {actionHome} from 'states/action';
import {apiMovies, TMovies} from 'services/api';

export default function useHome() {
  const {state, dispatch} = useStateContext();
  const {home} = state;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [type, setType] = useState<TMovies>('now_playing');

  // Get Movies
  const getMovies = async () => {
    setLoading(true);
    await apiMovies(page, type)
      .then(res => {
        const results = _.result(res, 'results', []);
        const totalPages = _.result(res, 'total_pages', 1);
        setTotalPage(totalPages);
        setError(false);

        if (page === 1) dispatch(actionHome(results));
        else {
          const combineResult = [...home, ...results];
          dispatch(actionHome(combineResult));
        }
      })
      .catch(err => setError(true))
      .finally(() => setLoading(false));
  };

  // Change Page
  const changePage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  // Change Movie Type
  const changeType = (typeMovie: TMovies) => {
    setPage(1);
    setTotalPage(1);
    setType(typeMovie);
  };

  useEffect(() => {
    getMovies();
  }, [page, type]);

  return {getMovies, changePage, changeType, loading, page, type, error};
}
