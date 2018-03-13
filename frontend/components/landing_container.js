import React from 'react';
import { connect } from 'react-redux';
import { Landing } from './landing';
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
)(Landing));
