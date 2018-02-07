import * as APIutil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const fetchProjects = () => dispatch => {
  return APIutil.fetchProjects().then(serverProjects =>
    dispatch(receiveAllProjects(serverProjects)));
};

const receiveAllProjects = projects => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const fetchProject = (id) => dispatch => {
  return APIutil.fetchProject(id).then(serverProject =>
    dispatch(receiveProject(serverProject)));
};

const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const createProject = project => dispatch => {
  return APIutil.createProject(project).then(serverProject =>
  dispatch(receiveProject(serverProject)),
  err => dispatch(receiveProjectErrors(err.responseJSON)));
};

const receiveProjectErrors = errors => {
  console.log(errors);
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const clearProjectErrors = () => dispatch => {
  return dispatch(receiveProjectErrors([]));
};

export const deleteProject = id => dispatch => {
  return APIutil.deleteProject(id).then(serverProject =>
  dispatch(receiveProject(serverProject)));
};

const removeProject = project => {
  return {
    type: REMOVE_PROJECT,
    project
  };
};
