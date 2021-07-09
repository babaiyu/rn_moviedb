import {Action, Type} from './types';

// Set Movies at Home
export const actionHome = (data: any[] = []): Action => ({
  type: Type.HOME,
  data,
});

// Set Detail Movies
export const actionDetail = (data: any): Action => ({
  type: Type.DETAIL,
  data,
});

// Set Serch Movies
export const actionSearch = (data: any[] = []): Action => ({
  type: Type.SEARCH,
  data,
});
