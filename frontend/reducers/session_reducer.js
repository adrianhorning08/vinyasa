import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let oldState = {
  currentUser: null,
};
export const sessionReducer = (state = oldState, action) => {
  let newState = {};
  Object.freeze(state);
  console.log(action.payload);
  if (action.payload === null) {
    newState.currentUser = null;
    console.log(newState);
    return newState;
  }
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.payload.user;
      return newState;
    default:
      return state;
  }
};
