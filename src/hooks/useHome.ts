import {useState, useEffect} from 'react';
import _ from 'lodash';
import {useStateContext} from 'states/store';
import {actionHome} from 'states/action';
import {apiMovies, TMovies} from 'services/api';

export default function useHome() {
  const {dispatch} = useStateContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState<TMovies>('now_playing');

  // Get Movies
  const getMovies = async () => {
    setLoading(true);
    await apiMovies(page, type)
      .then(res => {
        const results = _.result(res, 'results', []);
        dispatch(actionHome(results));
        setError(false);
      })
      .catch(err => setError(true))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  // Change Page
  const changePage = (num: number) => {
    setPage(page);
  };

  // Change Movie Type
  const changeType = (typeMovie: TMovies) => {
    setType(type);
  };

  useEffect(() => {
    getMovies();
  }, [page, type]);

  return {getMovies, changePage, changeType, loading, error};
}
