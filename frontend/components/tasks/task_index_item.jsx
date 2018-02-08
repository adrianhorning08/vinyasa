import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-item">
        <div className="task-content">
          <i className="far fa-check-circle"></i>
          <div className="task-title">
            <Link to={`/dashboard/tasks/${this.props.task.id}`}>{this.props.task.title}</Link>
          </div>
        </div>
      </div>
    );
  }
}
