import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import TeamShowContainer from './sidebar/teams/team_show_container';
import {Route, Redirect} from 'react-router-dom';
import HeaderTextContainer from './header_text/header_text_container';
import TopbarContainer from './topbar/topbar_container';


export const Dashboard = (props) => {
  return (
    <div className="vinyasa_ui">
      <div className="sidebar">
        <div className="sidebar-logo"></div>
        <SidebarContainer/>
        <Route exact path="/dashboard/teams/:teamId" component={TeamShowContainer}/>
      </div>

      <div className="vinyasa_main">
      <TopbarContainer/>
        <div className="page-header">
        </div>
        <div className="vinyasa_main_body_container">
        </div>
      </div>
    </div>
  );
};
