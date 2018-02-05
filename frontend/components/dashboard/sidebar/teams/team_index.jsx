import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }


  render() {
    return (
      <div className="topbar-dropdown">
        <ul className="dropdown-content">
          <h4>Teams</h4>
          {this.props.teams.map(team => {
            return <li key={team.id}>
              <Link to={`/dashboard/teams/${team.id}`}>
                {team.name}
              </Link>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
