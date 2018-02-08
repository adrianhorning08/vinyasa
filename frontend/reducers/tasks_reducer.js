import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';



export const tasksReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return action.payload.tasks;
    case RECEIVE_USER:
      return action.payload.tasks;
    default:
      return state;
  }
};
