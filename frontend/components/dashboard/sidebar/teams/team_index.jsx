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
    let teamList;
    if (this.props.teams) {
      teamList = Object.values(this.props.teams);
      return (
        <div className="sidebar-section">
          <h4>My Teams</h4>
          {teamList.map(team => {
            return <li key={team.id}>
              <Link to={`/dashboard/teams/${team.id}`}>
                {team.name}
              </Link>
            </li>;
          })}
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
