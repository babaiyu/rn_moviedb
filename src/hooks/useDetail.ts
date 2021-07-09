import {useState, useEffect} from 'react';
import _ from 'lodash';
import {useStateContext} from 'states/store';
import {apiMovieID} from 'services/api';
import {actionDetail} from 'states/action';

export default function useDetail() {
  const {state, dispatch} = useStateContext();

  const {detail} = state;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(undefined);

  // Get Movie by ID
  const getMovieID = async (id: number) => {
    setLoading(true);
    await apiMovieID(id)
      .then(res => {
        dispatch(actionDetail(res));
        setData(res);
      })
      .catch(err => setError(true))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  useEffect(() => {
    if (detail) getMovieID(detail?.id);

    return () => {
      setData(undefined);
      dispatch(actionDetail(undefined));
    };
  }, []);

  return {getMovieID, loading, error, data};
}
