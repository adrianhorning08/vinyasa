import React from 'react';
import { TaskIndexItem } from './task_index_item';

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let id = Number(this.props.location.pathname.match(/\d+/));
    let nextId = Number(nextProps.location.pathname.match(/\d+/));
    let nextPath = nextProps.location.pathname.split('/')[2];

    if (id !== nextId && nextPath === 'projects') {
      this.props.fetchProject(nextId);
    }

    if (id !== nextId && nextPath === 'users') {
      this.props.fetchUser(nextId);
    }
  }

  componentDidMount() {
    let id = Number(this.props.location.pathname.match(/\d+/));
    let pathname = this.props.location.pathname.split('/')[2];
    if (pathname === 'projects') {
      this.props.fetchProject(id);
    } else if (pathname === 'users') {
      this.props.fetchUser(id);
    }
  }

  addTask(e) {
    e.preventDefault();
    let id = Number(this.props.location.pathname.match(/\d+/));
    let pathname = this.props.location.pathname.split('/');
    let task = {title: '', user_id: this.props.currentUser.id};
    let action;

    if (pathname[2] === 'users') {
      task.user_id = id;
      action = this.props.fetchUser;
    } else if (pathname[2] === 'projects') {
        task.project_id = id;
        action = this.props.fetchProject;
    } else if (pathname[1] === 'dashboard') {
        task.user_id = this.props.currentUser.id;
        action = this.props.fetchUser;
        id = this.props.currentUser.id;
    }
    this.props.createTask(task)
      .then(() => action(id));
  }

  render() {
    if (this.props.tasks.tasks !== null) {
      return (
        <div className="center-pane">
          <div className="task-index-header">
            <button onClick={this.addTask}>Add Task</button>
          </div>
            {Object.values(this.props.tasks.tasks).map(task => {
              return <TaskIndexItem
                key={task.id}
                task={task}
                updateTaskInStore={this.props.updateTaskInStore}
                currentTask={this.props.tasks.currentTask}
                deleteTask={this.props.deleteTask}
                fetchUser={this.props.fetchUser}
                fetchProject={this.props.fetchProject}
                history={this.props.history}
                match={this.props.match}
                currentUser={this.props.currentUser}
                updateTask={this.props.updateTask}
                />;
            })}
        </div>
      );
    } else {
      return null;
    }
  }
}
