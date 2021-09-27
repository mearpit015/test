import {Action, ActionCreator} from 'redux';


export const  INCREMENT : string = 'INCREMENT';
///ActionCreator is factory of action types.
export const increment : ActionCreator<Action> = () =>({
  type: INCREMENT
});

export const  DECREMENT : string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
