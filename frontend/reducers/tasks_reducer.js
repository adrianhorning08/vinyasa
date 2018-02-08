import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER} from '../actions/user_actions';
import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

const _nullTask = {
  currentTask: null,
  tasks: null
};

export const tasksReducer = (state = _nullTask, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      newState = merge({}, state);
      newState.currentTask = action.task;
      return newState;
    case RECEIVE_PROJECT:
      newState = merge({}, state);
      newState.tasks = action.payload.tasks;
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state);
      newState.tasks = action.payload.tasks;
      return newState;
    case REMOVE_TASK:
      newState = state;
      delete newState.tasks[action.project.id];
      return newState;
    default:
      return state;
  }
};
