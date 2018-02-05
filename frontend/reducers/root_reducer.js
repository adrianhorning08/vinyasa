import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import errorsReducer from './errors_reducer';
import { teamsReducer } from './team_reducer';
import { projectReducer } from './project_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  teams: teamsReducer,
  projects: projectReducer
});
