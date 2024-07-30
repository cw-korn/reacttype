// src/TaskItem.tsx
import React from 'react';
import { Task } from '../types';
import './styles.css';
interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li>
      {task.description} (Priority: {task.priority})
    </li>
  );
};

export default TaskItem;
