import React from 'react';

export class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-item">
        {this.props.task.title}
      </div>
    );
  }
}
