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
          <p>{this.props.currentUser.username}</p>
          <TeamIndexContainer/>
        </div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
