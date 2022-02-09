import React from 'react';

import 'amis/lib/themes/default.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';

import { ToastComponent, AlertComponent } from 'amis';
import { Route, Navigate, Routes, Link } from 'react-router-dom';
import Home from '@/views/Home';
import About from '@/views/About';
import AmisForm from '@/views/AmisForm';

{
  /* <ToastComponent key="toast" position={'top-right'} />
<AlertComponent key="alert" />
<AMISComponent /> */
}
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/AmisForm" element={<AmisForm />}></Route>
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </header>
    </div>
  );
};
export default App;
