import React from 'react';
import ReactDOM from 'react-dom/client';
import searchImages from './api';
import App from './App';

searchImages();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
