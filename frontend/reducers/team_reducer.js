import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS,
  REMOVE_TEAM, RECEIVE_TEAM_MEMBERS} from '../actions/team_actions';
import merge from 'lodash/merge';

export const teamsReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return action.teams;
    case RECEIVE_TEAM:
      newState[action.payload.team.id] = action.payload.team;
      return newState;
    case REMOVE_TEAM:
      newState = state;
      delete newState[action.team.id];
      return newState;
    case RECEIVE_TEAM_MEMBERS:
      newState.teamMembers = action.teamMembers;
      return merge({}, state, newState);
    default:
      return state;
  }
};
