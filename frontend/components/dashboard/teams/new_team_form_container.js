import React from 'react';
import { connect } from 'react-redux';
import { NewTeamForm } from './new_team_form';
import { createTeam } from '../../../actions/team_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTeamForm);
