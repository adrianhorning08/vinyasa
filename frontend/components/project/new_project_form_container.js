import React from 'react';
import { connect } from 'react-redux';
import { createProject, clearProjectErrors } from '../../actions/project_actions';
import { NewProjectForm } from './new_project_form';

const mapStateToProps = state => {
  let errors = state.errors.projects;
  return {
    currentTeam: state.teams.currentTeam,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
