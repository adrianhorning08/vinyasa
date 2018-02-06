import React from 'react';
import { connect } from 'react-redux';
import { TeamShow } from './team_show';
import { fetchTeam } from '../../../../actions/team_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTeam: state.teams.currentTeam,
    members: Object.values(state.members),
    projects: Object.values(state.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeam: id => dispatch(fetchTeam(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamShow));
