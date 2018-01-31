import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Vinyasa</h1>
      <GreetingContainer/>
    </header>
    
    <Switch>
     <AuthRoute exact path="/login" component={SessionFormContainer} />
     <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
