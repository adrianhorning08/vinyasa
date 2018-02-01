import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
     <AuthRoute exact path="/login" component={SessionFormContainer} />
     <AuthRoute exact path="/signup" component={SessionFormContainer} />
     <GreetingContainer/>
    </Switch>
  </div>
);

export default App;
