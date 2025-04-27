// src/components/TaskCard.jsx
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Assigned: {task.assignedTo}</p>
    </div>
  );
};

export default TaskCard;
