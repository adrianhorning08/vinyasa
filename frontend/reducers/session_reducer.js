import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let oldState = {
  currentUser: null,
};

export const sessionReducer = (state = oldState, action) => {
  let newState = {};
  if (action.payload === null) {
    newState.currentUser = null;
    return newState;
  }
  if (state.currentUser !== null) {
    if (state.currentUser.user) {
      state.currentUser = state.currentUser.user;
      console.log(state.currentUser.user);
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
