import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import JobSearch from './pages/JobSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/job-search' element={<JobSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
