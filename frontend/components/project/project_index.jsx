import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.projects.length > 0) {
      return (
        <div className="sidebar-section">


          <div className="sidebar-list">
              <ul>
                {this.props.projects.map(project => {
                  return <li key={project.id* Math.random()}>{project.title}</li>;
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
