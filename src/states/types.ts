import {Dispatch} from 'react';

export enum Type {
  EXAMPLE = 'EXAMPLE',
}

export type Action = {type: Type.EXAMPLE; data: any};

export interface State {
  example: '';
}

export interface Store {
  state: State;
  dispatch: Dispatch<any>;
}
