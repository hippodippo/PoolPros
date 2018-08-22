import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './App.js';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
