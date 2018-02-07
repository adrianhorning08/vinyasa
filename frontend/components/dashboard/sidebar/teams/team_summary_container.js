import React from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../../../actions/team_actions';
import { withRouter } from 'react-router';
import { TeamSummary } from './team_summary';
import { clearProjectErrors } from '../../../../actions/project_actions';


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeam: id => dispatch(fetchTeam(id)),
    clearProjectErrors: () => dispatch(clearProjectErrors([]))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSummary));
