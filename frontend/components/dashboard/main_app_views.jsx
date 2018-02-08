import React from 'react';
import TaskIndexContainer from '../tasks/task_index_container';
// definitely scraped this idea from rsmease.
// Thanks ryan ;)

export const ProjectTaskView = () => {
  return (
    <div className="center-pane">
      <TaskIndexContainer groupType="project"/>
    </div>
  );
};

export const UserTaskView = () => {
  return (
    <div className="center-pane">
      <TaskIndexContainer groupType="user"/>
    </div>
  );
};
