import React from 'react';
import { connect } from 'react-redux';
import { TaskIndex } from './task_index';
import { withRouter } from 'react-router';
import { fetchProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/user_actions';
import { createTask, deleteTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    projects: state.projects,
    currentUser: state.session.currentUser,
    currentProject: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: id => dispatch(deleteTask(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex));
