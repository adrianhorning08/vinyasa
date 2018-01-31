import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let oldState = {
  currentUser: null,
};
export const sessionReducer = (state = oldState, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return merge({}, state, newState);
    default:
      return state;
  }
};
