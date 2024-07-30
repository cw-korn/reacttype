import React from 'react';

interface TaskInputProps {
  value: string;
  priority: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPriorityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAdd: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ value, priority, onChange, onPriorityChange, onAdd }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} placeholder="Task description" />
      <select value={priority} onChange={onPriorityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
