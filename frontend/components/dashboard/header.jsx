import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title;
    let subheading;

    if (this.props.location.pathname.split('/')[2] === 'projects') {
      if (this.props.currentProject === null) {
        subheading = null;
      } else {
        subheading = this.props.currentProject.title;
      }
    }

    if (this.props.location.pathname === '/dashboard/') {
      title = <h1>My Tasks</h1>;
    } else if (this.props.location.pathname.split('/')[2] === 'users') {
      if (this.props.user.id === this.props.currentUser.id) {
        title = <h1>My Tasks</h1>;
      } else {
        title = <h1>{this.props.user.username}&#39;s Tasks</h1>;
      }
    } else if (this.props.team.currentTeam !== null) {
      title = <h1>{this.props.team.currentTeam.name}</h1>;
    } else {
      return null;
    }
    return (
      <div className="page-header-title">
        {title}
        <br/>
        <h4>{subheading}</h4>
      </div>
    );
  }
}
