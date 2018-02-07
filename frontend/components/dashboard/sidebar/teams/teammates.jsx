import React from 'react';
import { Link } from 'react-router-dom';

export class Teammates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.members.length > 0) {
      return (
        <div className="sidebar-section">
          <div className="show-page-index-header">
          </div>
          <div className="sidebar-title">
            <p>Teammates</p>
          </div>
          <div className="sidebar-list">
            <ul>
              {this.props.members.map(member => {
                return <li key={member.id* Math.random()}>
                  <Link to={`/dashboard/users/${member.id}`}>{member.username}</Link>
                </li>;
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
