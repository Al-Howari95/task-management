// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';  // استيراد Redux Thunk
import App from './App';
import taskReducer from './reducers/TaskReducer';

const store = createStore(taskReducer, applyMiddleware(thunk));  // استخدام Redux Thunk

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
