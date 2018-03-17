import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let oldState = {
  currentUser: null,
};

export const sessionReducer = (state = oldState, action) => {
  let newState = {};
  // this is pretty jacked up right here.
  // I set this up pretty bad, so here I had to mutate the state in order to get it to work
  // Oh, I think it was how I set up the jbuilder
  if (action.payload === null) {
    newState.currentUser = null;
    return newState;
  }
  if (state.currentUser !== null) {
    if (state.currentUser.user) {
      state.currentUser = state.currentUser.user;
    }
  }
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.payload.user;
      return newState;
    default:
      return state;
  }
};
