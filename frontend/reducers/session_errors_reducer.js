import { RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER } from '../actions/session_actions';

export const sessionErrorsReducer = (state, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // sets errors to the action's errors
      newState = state;
      newState.errors = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      // clears the errors
      newState = state;
      newState.errors = [];
    default:
      return state;
  }
};
