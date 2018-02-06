import React from 'react';
import TeammatesContainer from './teammates_container';
import ProjectIndexContainer from '../../../project/project_index_container';

export class TeamSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let currentTeamId = Number(this.props.location.pathname.match(/\d+/));
    let nextTeamId = Number(nextProps.location.pathname.match(/\d+/));
    if (currentTeamId !== nextTeamId) {
      this.props.fetchTeam(nextTeamId);
    }
  }

  componentDidMount() {
    let teamId = Number(this.props.location.pathname.match(/\d+/));
    this.props.fetchTeam(teamId);
  }

  render() {
    return (
      <div>
        <div className="sidebar-section">
          <TeammatesContainer/>
        </div>
        <div className="sidebar-section">
          <ProjectIndexContainer/>
        </div>
      </div>
    );
  }
}
