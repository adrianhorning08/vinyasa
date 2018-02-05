import { RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT } from '../actions/project_actions';

export const projectReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
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
