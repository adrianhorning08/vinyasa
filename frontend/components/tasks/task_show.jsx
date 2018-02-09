import React from 'react';
import { Link } from 'react-router-dom';

export class TaskShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let taskId = this.props.location.pathname.split('/')[5];
    let nextId = nextProps.location.pathname.split('/')[5];
    let nextPath = nextProps.location.pathname.split('/')[4];
    if (taskId !== nextId && nextPath === 'tasks') {
      this.props.fetchTask(nextId);
    }
  }

  componentDidMount() {
    let taskId = this.props.location.pathname.split('/')[5];
    this.props.fetchTask(taskId);
  }

  render() {
    let path = this.props.location.pathname.split('/')[2];
    let id = this.props.location.pathname.split('/')[3];
    if (path === 'users') {
      path = `/dashboard/users/${id}`;
    } else {
      path = `/dashboard/projects/${id}`;
    }

    if (this.props.currentTask !== null) {
      let task = this.props.currentTask;
      return (
        <div className="single-task-pane">
          <div className="single-task-pane-toolbar">
            <Link to={path}>
            <svg
              className="xicon-single-task"
              viewBox="0 0 32 32"
              >
              <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828">
              </polygon>
            </svg>
            </Link>
          </div>
          <div className="single-task-pane-title">
            <div className="single-task-pane-checkbox">
              <svg onClick={this.completeTask} className="Icon PlusIcon CompleteIcon Big" viewBox="0 0 32 32">
                <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
                </polygon>
              </svg>
            </div>
              {task.title}

          </div>
          <textarea className="single-task-pane-description">
            {task.description}
          </textarea>
        </div>
      );
    } else {
      return null;
    }
  }
}
