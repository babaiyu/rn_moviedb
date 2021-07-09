import {Action, Type, State} from './types';

const reducer = (state: State, action: Action): State => {
  const {type, data} = action;

  switch (type) {
    case Type.HOME:
      return {
        ...state,
        home: data,
      };
    case Type.DETAIL:
      return {
        ...state,
        detail: data,
      };

    default:
      throw new Error('There is no actions');
  }
};

export default reducer;
