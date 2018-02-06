import React from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../../../actions/team_actions';
import { withRouter } from 'react-router';
import { TeamSummary } from './team_summary';

const mapStateToProps = state => {
  return {
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
)(TeamSummary));
