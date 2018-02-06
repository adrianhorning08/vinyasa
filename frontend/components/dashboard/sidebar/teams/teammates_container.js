import React from 'react';
import { connect } from 'react-redux';
import {Teammates} from './teammates';

const mapStateToProps = state => {
  return {
    members: Object.values(state.members),
    team: state.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teammates);
