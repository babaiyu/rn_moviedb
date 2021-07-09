import {Action, Type} from './types';

// Get Movies at Home
export const actionHome = (data: any[] = []): Action => ({
  type: Type.HOME,
  data,
});

// Get Detail Movies
export const actionDetail = (data: any): Action => ({
  type: Type.DETAIL,
  data,
});
