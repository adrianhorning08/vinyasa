import React from 'react';

export class TeamShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.team;
  }

  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  render() {
    console.log(this.props.team);
    let team = this.props.team ? this.props.team : '';
    return (
      <div>
        {team.name}
      </div>
    );
  }
}
