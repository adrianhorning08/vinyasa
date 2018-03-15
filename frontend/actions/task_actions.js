import * as APIutil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const fetchTask = id => dispatch => {
  return APIutil.fetchTask(id)
    .then(serverTask => dispatch(receieveTask(serverTask)));
};

const receieveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const createTask = task => dispatch => {
  return APIutil.createTask(task)
    .then(serverTask => dispatch(receieveTask(serverTask)));
};
export const updateTaskInStore = task => dispatch => {
  return dispatch(receieveTask(task));
};

export const updateTask = task => dispatch => {
  return APIutil.updateTask(task)
    .then(serverTask => dispatch(receieveTask(serverTask)));
};

export const deleteTask = task => dispatch => {
  return APIutil.deleteTask(task)
    .then(serverTask => dispatch(removeTask(serverTask)));
};

const removeTask = task => {
  return {
    type: REMOVE_TASK,
    task
  };
};
