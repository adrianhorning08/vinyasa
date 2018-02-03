import React from 'react';

export class TeamShow extends React.Component {
  constructor(props) {
    super(props);
    // Uh, why do I need to log something here in order
    // for this to work??
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchTeam(nextProps.team.id);
    }
  }

  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  printAttributes() {
    if (this.props.team) {
      let team = this.props.team;
      if (team.members) {
        return (
          <div>
            {team.name}
            {team.members.map(member => {
              return member.username;
            })}
          </div>
        );
      }

    } else {
      return (
        <div>
        </div>
      );
    }
  }

  render() {
    // if not this.props.team return null. Good place
    // for a loading page
    return (
      <div>
        {this.printAttributes()}
      </div>
    );
  }
}
