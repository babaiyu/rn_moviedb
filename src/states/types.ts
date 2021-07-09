import {Dispatch} from 'react';

export enum Type {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  SEARCH = 'SEARCH',
}

export type Action =
  | {type: Type.HOME; data: any[]}
  | {type: Type.DETAIL; data: any[]}
  | {type: Type.SEARCH; data: any[]};

export interface State {
  home: any[];
  detail: any;
  search: any[];
}

export interface Store {
  state: State;
  dispatch: Dispatch<any>;
}
