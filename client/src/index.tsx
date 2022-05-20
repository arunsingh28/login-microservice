import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { Provider } from 'react-redux'
import { store } from './services/store'
// root style file
import './styles/App.scss';




ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

