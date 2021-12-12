import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
         <Route path="/" element={<App />} />
         <h1>Hello from friends!</h1>
      </Routes>
   </BrowserRouter>,
   document.getElementById('root')
);
