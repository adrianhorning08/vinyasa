import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';
import { fetchTeams, fetchTeam, createTeam, deleteTeam } from './actions/team_actions';
import {fetchTeamMembers} from './actions/team_members.js';

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

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchTeams = fetchTeams;
  window.fetchTeam = fetchTeam;
  window.createTeam = createTeam;
  window.deleteTeam = deleteTeam;
  ReactDOM.render(<Root store={store}/>, root);
});
