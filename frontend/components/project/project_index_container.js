import React from 'react';
import { connect } from 'react-redux';
import { ProjectIndex } from './project_index';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: Object.values(state.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
