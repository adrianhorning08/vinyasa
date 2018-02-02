import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS, REMOVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

export const teamsReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return action.teams;
    case RECEIVE_TEAM:
      newState[action.team.id] = action.team;
      return merge({}, state, newState);
    case REMOVE_TEAM:
      newState = state;
      delete newState[action.team.id];
      return newState;
    default:
      return state;
  }
};
