import React from 'react';
import { connect } from 'react-redux';
import { createProject, clearProjectErrors } from '../../actions/project_actions';
import { NewProjectForm } from './new_project_form';
import { fetchTeam } from '../../actions/team_actions';

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
    clearProjectErrors: () => dispatch(clearProjectErrors()),
    fetchTeam: (id) => dispatch(fetchTeam(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
