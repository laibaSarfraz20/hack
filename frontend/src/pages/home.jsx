// src/pages/Home.jsx
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from '../components/TaskColumn';

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task A', assignedTo: 'User1', status: 'To Do' },
    { id: '2', title: 'Task B', assignedTo: 'User2', status: 'In Progress' },
    { id: '3', title: 'Task C', assignedTo: 'User3', status: 'Done' },
  ]);

  const columns = ['To Do', 'In Progress', 'Done'];

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="task-board">
        {columns.map((column) => (
          <TaskColumn
            key={column}
            column={column}
            tasks={tasks.filter((task) => task.status === column)}
            onTaskMove={handleDragEnd}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Home;
