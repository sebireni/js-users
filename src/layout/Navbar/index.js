import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__ul'>
        <li className='navbar__ul__li'>
          <Link to='/'><HomeIcon fontSize='large' /></Link>
        </li>
        <li className='navbar__ul__li'>
          <Link to='/users'>Users list</Link>
        </li>
        <li className='navbar__ul__li'>
          <Link to='/new'>Add new user</Link>
        </li>
        <li className='navbar__ul__li'>
          <Link to='/edit'>Edit users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;