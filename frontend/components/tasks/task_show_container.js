import React from 'react';
import { connect } from 'react-redux';
import { TaskShow } from './task_show';
import { withRouter } from 'react-router';
import { fetchTask, deleteTask, updateTask, updateTaskInStore} from '../../actions/task_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    currentTask: state.tasks.currentTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: id => dispatch(fetchTask(id)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchProject: id => dispatch(fetchProject(id)),
    updateTask: task => dispatch(updateTask(task)),
    updateTaskInStore: task => dispatch(updateTaskInStore(task))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow));
