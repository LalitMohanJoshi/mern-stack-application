import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './application/configs/routes';
import App from './application/views/App';
import { Body } from './application/views/elements/primary/body';
// import HomePage from './application/views/pages/home';
import './index.css'; 
import reportWebVitals from './systems/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode> // it enables additional check for react app security
    <AppRoutes></AppRoutes> 
  // {/* <AppRoutes></AppRoutes> // create route based app here */}
  // {/* <App /> we can load component here */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
