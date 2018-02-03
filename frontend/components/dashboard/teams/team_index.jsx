import React from 'react';
import { TeamIndexItem } from './team_index_item';
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
      <div className="teams-sidebar">
        <ul>
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
