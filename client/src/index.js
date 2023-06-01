import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.render(
  <RouterProvider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </RouterProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
