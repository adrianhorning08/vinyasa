import { connect } from 'react-redux';
import { SessionForm } from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

// Why don't we need withRouter here? Didn't we need it in the
// practice test when we were trying to render a different form?

const mapStateToProps = (state, ownProps) => {
  // loggedIn (boolean) - representing whether a currentUser exists
  // errors (array) - list of errors from the state
  // formType (string): 'login' or 'signup' given the current
  // ownProps.location.pathname
  let loggedIn = state.session.currentUser ? true : false;
  let errors = state.errors.session;
  let formType = ownProps.match.path === '/login' ? 'login' : 'signup';
  return { loggedIn, errors, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // processForm (function): dispatching action creators login or
  // signup given formType
  let processForm = ownProps.match.path === '/login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
