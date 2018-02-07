import React from 'react';
import { connect } from 'react-redux';
import { ProjectIndex } from './project_index';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects.projects
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
