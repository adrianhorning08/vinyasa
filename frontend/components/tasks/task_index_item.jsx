import React from 'react';

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
            {this.props.task.title}
          </div>
        </div>
      </div>
    );
  }
}
