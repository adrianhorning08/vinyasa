import { RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';

export const projectReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      return action.payload.projects;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      newState = state;
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};
