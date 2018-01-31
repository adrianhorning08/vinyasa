import { combineReducers } from 'redux';
import { sessionReducer } from './seesion_reducer';
import { sessionErrorsReducer } from './session_errors_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer
});
