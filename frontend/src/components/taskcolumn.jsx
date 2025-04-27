// src/components/TaskColumn.jsx
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './taskcard';

const TaskColumn = ({ column, tasks, onTaskMove }) => {
  return (
    <div className="task-column">
      <h2>{column}</h2>
      <Droppable droppableId={column}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
