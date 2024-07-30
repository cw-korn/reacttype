import React, { useState, useEffect, useMemo, useCallback, useTransition } from 'react';
import './App.css'
import { Task } from './types'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './components/styles.css';


function App() {
  const [tasks,setTasks] = useState<Task[]>([]);
  const [input,setInput] = useState<string>('');
  const [priority,setPriority] = useState<number>(1);

  useEffect(() => {
    // Fetch data or perform some action only when the component mounts
    const initialTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
    setTasks(initialTasks);
  }, []); // Empty dependency array means this effect runs only once
  
  useEffect(() => {
    // Update local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Only run this effect when 'tasks' changes
  
  // const [isPending, startTransition] = useTransition();
  
  //to avoid unneccessary creation only change when input change 
  const addTask = useCallback(() => {
    if (input) {
      console.log("Adding task:", input);
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks, { id: Date.now(), description: input, priority }];
        console.log("New tasks:", newTasks);
        return newTasks;
      });
      setInput('');
      setPriority(1);
    }
  }, [input,priority]);
  
  
  //to avoid sorting every render -- only sort when priority change 
  const sortedTasks = useMemo(() => {
    return tasks.sort((a, b) => b.priority - a.priority);
  }, [tasks]);
  
  
  
  //more logic will go here
  return (
   <div>
    <TaskInput 
    value = {input} 
    priority={priority}
    onChange = {(e)=> setInput(e.target.value)} 
    onPriorityChange={(e) => setPriority(Number(e.target.value))}
    onAdd={addTask}/>
    <TaskList tasks={sortedTasks}/>
   </div>
  );
}

export default App
