// src/actions/taskActions.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/tasks';

export const getTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({
        type: 'GET_TASKS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting tasks:', error);
    }
  };
};

export const addTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, { ...task, priority: 'medium' });
      dispatch({
        type: 'ADD_TASK',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
      dispatch({
        type: 'DELETE_TASK',
        payload: taskId,
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
};

export const toggleTask = (taskId) => {
  return async (dispatch, getState) => {
    const task = getState().tasks.find((task) => task.id === taskId);
    try {
      const response = await axios.patch(`${apiUrl}/${taskId}`, { completed: !task.completed });
      dispatch({
        type: 'TOGGLE_TASK',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };
};

export const updateTask = (taskId, updatedTask) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/${taskId}`, updatedTask);
      dispatch({
        type: 'UPDATE_TASK',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };
};
