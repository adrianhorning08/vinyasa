import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.projects !== null) {
      return (
        <div className="sidebar-section">
          <div className="sidebar-list">
              <ul>
                {Object.values(this.props.projects).map(project => {
                  return <li key={project.id* Math.random()}>
                    <Link to={`/dashboard/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </li>;
                })}
              </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
