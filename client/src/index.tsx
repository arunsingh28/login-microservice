import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
// root style file
import './styles/App.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

