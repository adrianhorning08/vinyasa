import { connect } from 'react-redux';
import { SessionForm } from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
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
