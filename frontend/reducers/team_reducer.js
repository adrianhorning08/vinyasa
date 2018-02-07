import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS,
  REMOVE_TEAM, RECEIVE_TEAM_MEMBERS} from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeam = {
  currentTeam: null,
  teams: null
};

export const teamsReducer = (state = _nullTeam, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      newState = merge({}, state);
      newState.teams = action.teams;
      return newState;
    case RECEIVE_TEAM:
      newState.currentTeam = action.payload.team;
      return merge({}, state, newState);
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
