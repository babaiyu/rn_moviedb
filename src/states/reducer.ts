import {Action, Type, State} from './types';

const reducer = (state: State, action: Action): State => {
  const {type, data} = action;

  switch (type) {
    case Type.EXAMPLE:
      return {
        ...state,
        example: data,
      };

    default:
      throw new Error('There is no actions');
  }
};

export default reducer;
