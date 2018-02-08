import React from 'react';
import { TaskIndexItem } from './task_index_item';

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    if (this.props.tasks.tasks !== null) {
      return (
        <div className="center-pane">
          <div className="task-index-header">
            <button>Add Task</button>
          </div>
            {Object.values(this.props.tasks.tasks).map(task => {
              return <TaskIndexItem key={task.id* Math.random()} task={task}/>;
            })}
        </div>
      );
    } else {
      return null;
    }
  }
}
