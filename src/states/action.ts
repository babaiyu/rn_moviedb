import {Action, Type} from './types';

// Get Movies at Home
export const actionHome = (data = []): Action => ({
  type: Type.HOME,
  data,
});
