import React from 'react';
import { connect } from 'react-redux';
import { TaskIndex } from './task_index';
import { withRouter } from 'react-router';
import { fetchProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex));
