import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/new' element={<NewUser/>} />
          {/* <Route path='/edit/:userid' element={<EditUser/>} /> */}
          <Route path='/edit' element={<EditUser/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
