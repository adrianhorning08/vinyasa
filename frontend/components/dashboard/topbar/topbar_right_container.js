import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { TopbarRight } from './topbar_right';
import { createTeam, clearTeamErrors, fetchTeams } from '../../../actions/team_actions';

const mapStateToProps = state => {
  let errors = state.errors.teams;
  return {
    currentUser: state.session.currentUser,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createTeam: team => dispatch(createTeam(team)),
    clearTeamErrors: () => dispatch(clearTeamErrors()),
    fetchTeams: () => dispatch(fetchTeams())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarRight);
