import React from 'react';
import { connect } from 'react-redux';
import { HeaderText } from './header_text';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderText);
