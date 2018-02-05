import React from 'react';
import { connect } from 'react-redux';
import { Sidebar } from './sidebar';
import { createTeam, clearTeamErrors } from '../../../actions/team_actions';

const mapStateToProps = state => {
  let errors = state.errors.teams;
  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team)),
    clearTeamErrors: () => dispatch(clearTeamErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
