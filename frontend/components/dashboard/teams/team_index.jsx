import React from 'react';
import { TeamIndexItem } from './team_index_item';
import { Link } from 'react-router-dom';

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
            return<li><Link to="/">{team.name}</Link></li>;
          })}
        </ul>
      </div>
    );
  }
}
