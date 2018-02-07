import { RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullProject = {
  currentProject: null,
  projects: null
};

export const projectReducer = (state = _nullProject, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      newState.projects = action.projects;
      return merge({}, state, newState);
    case RECEIVE_TEAM:
      // I don't merge because when I create a new project,
      // right after I fetch the team, to get all the projects.
      // But if I merge the projects state will now always have
      // that new project. So each page you go to have will have the new
      // project I created.
      newState = merge({}, state);
      newState.projects = action.payload.projects;
      return newState;
    case RECEIVE_PROJECT:
      newState = merge({}, state);
      newState.currentProject = action.payload.project;
      return newState;
    case REMOVE_PROJECT:
      newState = state;
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};
