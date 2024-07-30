// src/TaskList.tsx
import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';
import './styles.css';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
