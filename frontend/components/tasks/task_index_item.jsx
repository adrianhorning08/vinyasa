import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.title
    };
    this.completeTask = this.completeTask.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField() {
    return e => {
      return this.setState({title: e.target.value});
    };
  }

  completeTask() {
    let pathname = this.props.history.location.pathname.split('/');
    let id = Number(this.props.history.location.pathname.match(/\d+/));
    let action;
    if (pathname[2] === 'projects') {
      action = this.props.fetchProject;
    } else if (pathname[2] === 'users') {
      action = this.props.fetchUser;
    } else if (pathname[1] === 'dashboard') {
      action = this.props.fetchUser;
      id = this.props.currentUser.id;
    }
    this.props.deleteTask(this.props.task.id)
      .then(() => action(id));
  }

  render() {
    let pathname = this.props.history.location.pathname.split('/');
    let id = Number(this.props.history.location.pathname.match(/\d+/));
    if (pathname[2] === 'projects') {
      pathname = 'projects';
    } else if (pathname[2] === 'users') {
      pathname = 'users';
    } else if (pathname[1] === 'dashboard') {
      pathname = 'users';
      id = this.props.currentUser.id;
    }

    return (
      <div className="task-item">
        <div className="task-content">
          <div className="checkbox">
            <svg onClick={this.completeTask} className="Icon PlusIcon CompleteIcon Small" viewBox="0 0 32 32">
              <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
              </polygon>
            </svg>
          </div>
          <div className="task-title">
            <Link to={`/dashboard/${pathname}/${id}/tasks/${this.props.task.id}`}>
              <textarea
                placeholder="Write a task name"
                value={this.state.title}
                className="task-name-input"
                onChange={this.updateField()}
                >
              </textarea>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
