// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, updateTask } from '../actions/TaskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleDelete = async (taskId) => {
    try {
      dispatch(deleteTask(taskId));
      setEditingTask(null);
      setEditedTask({});
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditChange = (taskId, field, value) => {
    setEditedTask((prevEditedTask) => ({
      ...prevEditedTask,
      [taskId]: { ...prevEditedTask[taskId], [field]: value },
    }));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
    setEditingTask(null);
  };

  const handleEdit = (taskId) => {
    setEditingTask(taskId);
    setEditedTask({});
  };

  const handleSaveEdit = async (taskId) => {
    try {
      const updatedTask = editedTask[taskId];
      await dispatch(updateTask(taskId, updatedTask));
      setEditingTask(null);
      setEditedTask({});
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'completed') {
        return task.completed;
      } else if (filter === 'pending') {
        return !task.completed;
      } else {
        return true;
      }
    })
    .filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <div className="filter-container">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <label>Search: </label>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        <button onClick={() => setSearchTerm('')}>Clear</button>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div className={`task-card ${task.completed ? 'completed' : ''}`} key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            {editingTask === task.id ? (
              <>
                <label>Title: </label>
                <input
                  type="text"
                  value={editedTask[task.id]?.title || task.title}
                  onChange={(e) => handleEditChange(task.id, 'title', e.target.value)}
                />
                <label>Description: </label>
                <textarea
                  value={editedTask[task.id]?.description || task.description}
                  onChange={(e) => handleEditChange(task.id, 'description', e.target.value)}
                ></textarea>
                <label>Due Date: </label>
                <input
                  type="text"
                  value={editedTask[task.id]?.dueDate || task.dueDate}
                  onChange={(e) => handleEditChange(task.id, 'dueDate', e.target.value)}
                />
                <label>Priority: </label>
                <select
                  value={editedTask[task.id]?.priority || task.priority}
                  onChange={(e) => handleEditChange(task.id, 'priority', e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setEditingTask(null)}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleToggle(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <button onClick={() => handleEdit(task.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;