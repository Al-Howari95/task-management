// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/TaskActions';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', completed: false });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: Date.now() }));
    setTask({ title: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Title" required />
      <textarea name="description" value={task.description} onChange={handleInputChange} placeholder="Description" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
