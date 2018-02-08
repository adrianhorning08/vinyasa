import React from 'react';

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
    if (this.props.tasks.length > 0) {
      return (
        <div className="center-pane">
            <ul>
              {Object.values(this.props.tasks).map(task => {
                return <li key={task.id* Math.random()}>Title:{task.title}Assignee:{task.user_id} </li>;
              })}
            </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}
