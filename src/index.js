import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './App.js';
import Card from './components/Card/Card';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
