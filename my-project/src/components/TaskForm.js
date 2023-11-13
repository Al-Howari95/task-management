// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../actions/TaskActions';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', priority: 'medium', dueDate: '' });
  const [editingTask, setEditingTask] = useState(null); // حالة التحرير
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask !== null) {
      // إذا كان المستخدم يقوم بتحرير مهمة موجودة، قم بتحديثها
      dispatch(updateTask(editingTask, task));
    } else {
      // إذا كان المستخدم يقوم بإضافة مهمة جديدة
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    setTask({ title: '', description: '', priority: 'medium', dueDate: '' });
    setEditingTask(null); // إلغاء حالة التحرير بعد إضافة أو تحديث المهمة
  };

  useEffect(() => {
    // إذا كانت حالة التحرير غير فارغة، قم بتحديث حالة النموذج ببيانات المهمة المحددة
    if (editingTask !== null) {
      const editedTask = tasks.find(task => task.id === editingTask);
      if (editedTask) {
        setTask({ ...editedTask });
      }
    }
  }, [editingTask, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Title" required />
      <textarea name="description" value={task.description} onChange={handleInputChange} placeholder="Description" />
      <label>
        Priority:
        <select name="priority" value={task.priority} onChange={handleInputChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Due Date:
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleInputChange} />
      </label>
      <button type="submit">{editingTask !== null ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
