import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>,
  document.getElementById('root'),
);
