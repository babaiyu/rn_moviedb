import {Action, Type} from './types';

// Example
export const actionExample = (data = ''): Action => ({
  type: Type.EXAMPLE,
  data,
});
