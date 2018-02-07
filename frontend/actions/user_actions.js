import * as APIutil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = id => dispatch => {
  return APIutil.fetchUser(id)
  .then(serverUser => dispatch(receiveUser(serverUser)));
};

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};
