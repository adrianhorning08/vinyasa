import React from 'react';
import Sidebar from './sidebar/sidebar';
import {Route, Redirect} from 'react-router-dom';
import HeaderTextContainer from './header_text/header_text_container';
import TopbarContainer from './topbar/topbar_container';

const Dashboard = () => {
    return (
      <div className="vinyasa_ui">
        <Sidebar/>
        <div className="vinyasa_main">
          <TopbarContainer/>
          <div className="page-header">
          </div>
          <div className="vinyasa_main_body_container">
            // routes
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
