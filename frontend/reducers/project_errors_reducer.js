import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

export const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      // sets errors to the action's errors
      return action.errors;
    default:
      return state;
  }
};
