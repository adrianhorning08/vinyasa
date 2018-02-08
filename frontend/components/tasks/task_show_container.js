import React from 'react';
import { connect } from 'react-redux';
import { TaskShow } from './task_show';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow));
