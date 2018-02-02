import React from 'react';
import { connect } from 'react-redux';
import { TeamShow } from './team_show';
import { fetchTeam } from '../../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeam: id => dispatch(fetchTeam(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamShow);
