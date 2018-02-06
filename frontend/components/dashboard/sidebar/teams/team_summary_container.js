import React from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../../../actions/team_actions';
import { withRouter } from 'react-router';
import { TeamSummary } from './team_summary';
import { createProject, clearProjectErrors } from '../../../../actions/project_actions';


const mapStateToProps = state => {
  let errors = state.errors.projects;
  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeam: id => dispatch(fetchTeam(id)),
    createProject: project => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSummary));
