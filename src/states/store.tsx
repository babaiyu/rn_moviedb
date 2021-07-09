import React, {useContext, useReducer, ReactNode, createContext} from 'react';
import reducer from './reducer';
import {State, Store} from './types';

type Props = {
  children: ReactNode;
};

const defaultState: State = {
  home: [],
  detail: undefined,
};

const myContext = createContext<Store>({
  state: defaultState,
  dispatch: () => {},
});

export const useStateContext = () => useContext(myContext);

export const StateProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return <myContext.Provider value={{state, dispatch}} children={children} />;
};
