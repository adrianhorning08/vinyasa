import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location.pathname.split('/')[2] === 'users') {
      return (
        <div className="page-header-title">
          <h1>{this.props.user.username}&#39;s Tasks</h1>
        </div>
      );
    }  else if (this.props.team.currentTeam !== null) {
      return (
        <div className="page-header-title">
          <h1>{this.props.team.currentTeam.name}</h1>
        </div>
      );
    } else {
      return (null);
    }
  }
}
