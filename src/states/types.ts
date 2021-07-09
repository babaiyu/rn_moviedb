import {Dispatch} from 'react';

export enum Type {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
}

export type Action =
  | {type: Type.HOME; data: any[]}
  | {type: Type.DETAIL; data: any[]};

export interface State {
  home: any[];
  detail: any;
}

export interface Store {
  state: State;
  dispatch: Dispatch<any>;
}
