import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.projects.length > 0) {
      return (
        <div className="sidebar-section">
          
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
      );
    } else {
      return null;
    }
  }
}
