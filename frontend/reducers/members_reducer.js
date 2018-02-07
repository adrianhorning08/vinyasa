import { RECEIVE_TEAM } from '../actions/team_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

export const membersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TEAM:
      return action.payload.members;
    case RECEIVE_PROJECT:

    default:
      return state;
  }
};
