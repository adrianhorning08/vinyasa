import { RECEIVE_TEAM_ERRORS } from '../actions/team_actions';

export const teamErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TEAM_ERRORS:
      // sets errors to the action's errors
      return action.errors;
    default:
      return state;
  }
};
