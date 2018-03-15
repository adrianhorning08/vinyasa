import React from 'react';
import { Link } from 'react-router-dom';

export class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      id: this.props.location.pathname.split('/')[5]
    };
    this.updateField = this.updateField.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let taskId = this.props.location.pathname.split('/')[5];
    let nextId = nextProps.location.pathname.split('/')[5];
    let nextPath = nextProps.location.pathname.split('/')[4];

    // if there is an edit to the current tasks, update the state of the show
    // this is the realtime editing feature
    if (taskId === nextId && nextProps.currentTask.title !== this.state.title) {
      this.setState({title: nextProps.currentTask.title});
    }

    if (taskId !== nextId && nextPath === 'tasks') {
      this.props.fetchTask(nextId)
        .then(res => this.setState(
          {
            title:[res.task.title][0],
            description:[res.task.description][0],
            id: nextId
          }));
    }
  }

  componentDidMount() {
    let taskId = this.props.location.pathname.split('/')[5];
    this.props.fetchTask(taskId)
      .then(res => this.setState({title:[res.task.title][0], description:[res.task.description][0]}));
  }

  updateField(field) {
     return e => {
      return this.setState({[field]: e.target.value}, () => {
        this.props.updateTaskInStore(this.state);
      });
    };
  }

  updateTask() {
    this.props.updateTask(this.state);
  }

  close() {
    let path = this.props.location.pathname.split('/')[2];
    let id = this.props.location.pathname.split('/')[3];
    let action;
    if (path === 'users') {
      action = this.props.fetchUser;
    } else {
      action = this.props.fetchProject;
    }
    action(id)
      .then(() => this.props.history.push(`/dashboard/${path}/${id}`));
  }

  delete() {
    let path = this.props.location.pathname.split('/')[2];
    let id = this.props.location.pathname.split('/')[3];
    let action;
    if (path === 'users') {
      action = this.props.fetchUser;
    } else {
      action = this.props.fetchProject;
    }
    this.props.deleteTask(this.state.id)
      .then(() => action(id))
      .then(() => this.props.history.push(`/dashboard/${path}/${id}`));
  }

  render() {
    if (this.props.currentTask !== null) {
      let task = this.props.currentTask;
      return (
        <div className="single-task-pane">
          <div className="single-task-pane-toolbar">
            <svg
              onClick={this.close}
              className="xicon-single-task"
              viewBox="0 0 32 32"
              >
              <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828">
              </polygon>
            </svg>
          </div>
          <div className="single-task-pane-title">
            <div className="single-task-pane-checkbox">
              <svg onClick={this.delete}
                className="Icon PlusIcon CompleteIcon Big" viewBox="0 0 32 32">
                <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
                </polygon>
              </svg>
            </div>
              <input
                placeholder="Write a task name"
                onBlur={this.updateTask}
                onKeyPress={this.closeWithEnterKey}
                value={this.state.title}
                onChange={this.updateField('title')}
                >
              </input>

          </div>
          <textarea
            placeholder="Description"
            value={this.state.description}
            className="single-task-pane-description"
            onChange={this.updateField('description')}
            >
          </textarea>
        </div>
      );
    } else {
      return null;
    }
  }
}
