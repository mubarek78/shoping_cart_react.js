import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context';
// Importing the Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Context>
    <App />
    </Context>
);


