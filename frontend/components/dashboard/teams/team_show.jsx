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
          <div className="teams-show">
            <h1>{team.name}</h1>
            <div className="teams-show-members">
              <h3>Members</h3>
              <ul>
                {team.members.map(member => {
                  return <li key={member.id}>{member.username}</li>;
                })}
              </ul>
          </div>
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
