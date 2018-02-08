import * as APIutil from '../util/session_api_util';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const login = (user) => dispatch => {
  return APIutil.login(user).then(serverUser =>
    dispatch(receiveCurrentUser(serverUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => dispatch => {
  return dispatch(receiveErrors([]));
};

const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const logout = () => dispatch => {
  return APIutil.logout().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = (user) => dispatch => {
  return APIutil.signup(user).then(serverUser =>
  dispatch(receiveCurrentUser(serverUser)),
  err => dispatch(receiveErrors(err.responseJSON)));
};
