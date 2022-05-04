import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './output.css';
import Store from './Context';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);