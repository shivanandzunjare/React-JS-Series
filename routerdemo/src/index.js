import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider } from 'react-router-dom';
import customRouter from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={customRouter}>
      <App/>
    </RouterProvider>
   
  </React.StrictMode>
);


