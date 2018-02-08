import { RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

export const tasksReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};
