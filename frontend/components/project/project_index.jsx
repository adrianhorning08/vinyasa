import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchProjects(nextProps.team.id);
    }
  }

  componentDidMount() {
    this.props.fetchProjects(this.props.match.params.teamId);
  }

  render() {
    return (
      <div className="sidebar-secttion">
        <div className="sidebar-title">
          <h4>Projects</h4>
        </div>
        <div className="sidebar-list">
          <ul>
            {this.props.projects.map(project => {
              return <li key={project.id * Math.random()}>
                <Link to={`/dashboard/projects/${project.id}`}>
                  {project.title}
                </Link>
              </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
