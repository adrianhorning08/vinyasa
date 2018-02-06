import React from 'react';

export class Teammates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.members.length > 0) {
      return (
        <div className="sidebar-section">
          <div className="show-page-index-header">
            <h1>{this.props.team.currentTeam.name}</h1>
          </div>
          <div className="sidebar-title">
            <p>Team</p>
          </div>
          <div className="sidebar-list">
            <ul>
              {this.props.members.map(member => {
                return <li key={member.id* Math.random()}>{member.username}</li>;
                })}
              </ul>
            </div>
        </div>
        );
    } else {
      return null;
    }
  }
}
