import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.team.currentTeam !== null) {
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
