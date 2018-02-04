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

      <div className="sidebar-section">
        <div className="sidebar-title">
          <p>Teams</p>
          <svg className="Icon PlusIcon" viewBox="0 0 32 32"
            height="10" width="10">
            <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18">
            </polygon>
          </svg>
      </div>
      <div className="sidebar-list">
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
    </div>
    );
  }
}
