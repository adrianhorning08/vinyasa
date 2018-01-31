import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { SessionForm } from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  // loggedIn (boolean) - representing whether a currentUser exists
  // errors (array) - list of errors from the state
  // formType (string): 'login' or 'signup' given the current
  // ownProps.location.pathname
  let loggedIn = ownProps.match.params.currentUser ? true : false;
  let errors = state.errors;
  let formType = ownProps.location.pathname === '#/login' ? 'login' : 'signup';
  return { loggedIn, errors, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // processForm (function): dispatching action creators login or
  // signup given formType
  let processForm = ownProps.formType === 'login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
