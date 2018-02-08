import { RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

export const usersReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.user;
    default:
      return state;
  }
};
