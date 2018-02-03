import React from 'react';
import { connect } from 'react-redux';
import { TeamShow } from './team_show';
import { fetchTeam } from '../../../actions/team_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.teams[ownProps.match.params.teamId]
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

// wrapped with withRouter
// force the route to re-render
