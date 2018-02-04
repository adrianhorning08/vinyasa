import React from 'react';
import TeamIndexContainer from './teams/team_index_container';
import GreetingContainer from './greeting/greeting_container';
import TeamShowContainer from './teams/team_show_container';
import {Route, Redirect} from 'react-router-dom';
import HeaderTextContainer from './header_text/header_text_container';


export const Dashboard = (props) => {
  return (
    <div className="vinyasa_ui">
      <div className="sidebar">
        <div className="sidebar-logo"></div>
        <TeamIndexContainer/>
      </div>

      <div className="vinyasa_main">
        <div className="topbar">
          <GreetingContainer/>
        </div>
        <div className="page-header">
        </div>
        <div className="vinyasa_main_body_container">
          <Route exact path="/dashboard/teams/:teamId" component={TeamShowContainer}/>
        </div>
      </div>
    </div>
  );
};
