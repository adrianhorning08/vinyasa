import React from 'react';
import Sidebar from './sidebar/sidebar';
import {Route, Redirect} from 'react-router-dom';
import TopbarContainer from './topbar/topbar_container';
import TaskIndexContainer from '../tasks/task_index_container';
import HeaderContainer from './header_container';

const Dashboard = () => {
    return (
      <div className="vinyasa_ui">
        <Sidebar/>
        <div className="vinyasa_main">
          <TopbarContainer/>
          <div className="page-header">
            <HeaderContainer/>
          </div>
          <div className="vinyasa_main_body_container">
            <Route to="/dashboard/projects/:projectId" component={TaskIndexContainer}/>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
