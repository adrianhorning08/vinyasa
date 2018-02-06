import React from 'react';

export class TeamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.teamId);
    if (nextProps.match.params.teamId !== this.props.match.params.teamId) {
      this.props.fetchTeam(nextProps.match.params.teamId);
    }
  }

  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  printAttributes() {
    if (this.props.currentTeam !== null) {
      let team = this.props.currentTeam;
        return (
          <div>
            <div className="sidebar-section">
              <div className="show-page-index-header">
                <h1>{team.name}</h1>
              </div>
              <div className="sidebar-title">
                <p>Team</p>
              </div>
              <div className="sidebar-list">
                  <ul>
                    {this.props.members.map(member => {
                      return <li key={member.id* Math.random()}>{member.username}</li>;
                    })}
                  </ul>
              </div>
            </div>
            <div className="sidebar-section">
              <div className="show-page-index-header">
                <h1>{team.name}</h1>
              </div>
              <div className="sidebar-title">
                <p>Projects</p>
              </div>
              <div className="sidebar-list">
                  <ul>
                    {this.props.projects.map(project => {
                      return <li key={project.id* Math.random()}>{project.title}</li>;
                    })}
                  </ul>
              </div>
            </div>
          </div>
        );
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
