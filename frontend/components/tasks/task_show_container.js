import React from 'react';
import { connect } from 'react-redux';
import { TaskShow } from './task_show';
import { withRouter } from 'react-router';
import { fetchTask, deleteTask } from '../../actions/task_actions';

const mapStateToProps = state => {
  return {
    currentTask: state.tasks.currentTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: id => dispatch(fetchTask(id)),
    deleteTask: id => dispatch(deleteTask(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow));
