import React from 'react';
import TeamIndexContainer from './teams/team_index_container';
import GreetingContainer from './greeting/greeting_container';
import TeamShowContainer from './teams/team_show_container';
import {Route, Redirect} from 'react-router-dom';


export const Dashboard = (props) => {
  return (
    <div className="vinyasa_ui">
      <div className="sidebar">
        <div className="sidebar-logo"></div>
        <span className="sidebar-title">Teams</span>
        <TeamIndexContainer/>
      </div>

      <div className="vinyasa_main">
        <div className="topbar">
        </div>
        <div className="vinyasa_main_body_container">
          <Route exact path="/dashboard/teams/:id" component={TeamShowContainer}/>
          <GreetingContainer/>
        </div>
      </div>
    </div>
  );
};
