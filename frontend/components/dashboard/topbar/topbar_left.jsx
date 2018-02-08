import React from 'react';
import { Link } from 'react-router-dom';

export class TopbarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbar-left">
        <Link to={`/dashboard/users/${this.props.currentUser.id}`}>My Tasks</Link>
      </div>
    );
  }
}
