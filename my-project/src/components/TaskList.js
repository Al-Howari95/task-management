// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/TaskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true;
    }
  }).filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (taskId) => {
    handleToggle(taskId);
  };

  return (
    <div>
      <div>
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <label>Search: </label>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div className={`task-card ${task.completed ? 'completed' : ''}`} key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
