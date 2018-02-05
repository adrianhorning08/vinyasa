import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';
import { fetchProjects, fetchProject, createProject, deleteProject } from './actions/project_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
// testing
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.deleteProject = deleteProject;
  ReactDOM.render(<Root store={store}/>, root);
});
