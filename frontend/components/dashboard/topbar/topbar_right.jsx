import React from 'react';
import TeamIndexContainer from '../sidebar/teams/team_index_container';

export class TopbarRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbar-right">
        <div className="dropdown">
          <p>{this.props.currentUser.username}<i class="fa fa-caret-down"></i>
          </p>
          <div className="topbar-dropdown">
            <ul className="dropdown-content">
              <TeamIndexContainer/>
              <h4>More</h4>
              <li>Create New Team</li>
            </ul>
          </div>
        </div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
