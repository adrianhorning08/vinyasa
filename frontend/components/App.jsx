import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './dashboard/dashboard';
import TaskIndexContainer from './tasks/task_index_container';

const App = () => (

<div>
  <Switch>
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <Redirect to='/dashboard'/>
  </Switch>
</div>
);

export default App;
