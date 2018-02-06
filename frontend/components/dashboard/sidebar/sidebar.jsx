import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import TeamSummaryContainer from './teams/team_summary_container';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-logo"></div>
        <TeamSummaryContainer/>
      </div>
    );
};

export default Sidebar;
