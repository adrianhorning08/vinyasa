import React from 'react';

export class TeamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.team);
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  render() {
    // if not this.props.team return null. Good place
    // for a loading page
    let team = this.props.team ? this.props.team : '';
    console.log(team);
    return (
      <div>
        {team.name}
      </div>
    );
  }
}
