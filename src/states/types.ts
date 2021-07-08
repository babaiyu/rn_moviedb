import {Dispatch} from 'react';

export enum Type {
  HOME = 'HOME',
}

export type Action = {type: Type.HOME; data: any[]};

export interface State {
  home: any[];
}

export interface Store {
  state: State;
  dispatch: Dispatch<any>;
}
