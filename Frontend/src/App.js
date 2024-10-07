import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import JobSearch from './pages/JobSearch';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import JobDetailView from './pages/JobDetailView';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/job-search' element={<JobSearch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register'  element={<Register />} />
          <Route path='/details/:jobId' element={<JobDetailView />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
