// GreetingContainer passes as props to the presentational
// component currentUser from the state and the logout action creator.
// Set up mapStateToProps and mapDispatchToProps accordingly.
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Greeting } from './greeting';

const mapStateToProps = state => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
