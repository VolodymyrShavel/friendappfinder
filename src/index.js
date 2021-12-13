import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="*" element={<Navigation />} />
      </Routes>
   </BrowserRouter>,
   document.getElementById('root')
);
