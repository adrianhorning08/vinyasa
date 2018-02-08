import React from 'react';

export class TaskShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let id = Number(this.props.location.pathname.match(/\d+/));
    let nextId = Number(nextProps.location.pathname.match(/\d+/));
    let nextPath = nextProps.location.pathname.split('/')[2];
    if (id !== nextId && nextPath === 'tasks') {
      this.props.fetchTask(nextId);
    }
  }

  componentDidMount() {
    let id = Number(this.props.location.pathname.match(/\d+/));
    let pathname = this.props.location.pathname.split('/')[2];
    if (pathname === 'tasks') {
      this.props.fetchTask(id);
    }
  }

  render() {
    if (this.props.currentTask !== null) {
      return (
        <div className="single-task-pane">
          <div className="single-task-pane-toolbar">
            
          </div>
          {this.props.currentTask.title}
        </div>
      );
    } else {
      return null;
    }
  }
}
