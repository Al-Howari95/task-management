// src/App.js
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Header/><br></br><br></br>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
      <Footer/>
    </div>
  );
};

export default App;
