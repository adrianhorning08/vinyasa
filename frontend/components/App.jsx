import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route} from 'react-router';

const App = () => (
  <div>
    <header>
      <h1>Vinyasa</h1>
      <GreetingContainer/>
    </header>

   <Route path="/login" component={SessionFormContainer} />
   <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
