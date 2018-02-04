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
        <div class="sidebar-section">
          <span className="sidebar-title">Teams</span>
          <svg className="Icon PlusIcon" viewBox="0 0 32 32"
            height="10" width="10">
            <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18">
            </polygon>
          </svg>
        </div>
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
