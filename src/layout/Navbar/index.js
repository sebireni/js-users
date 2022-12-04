import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__ul'>
        <li className='navbar__ul__li'>
          <NavLink className='navbar__ul__li__link' to='/'><HomeIcon fontSize='large' /></NavLink>
        </li>
        <li className='navbar__ul__li'>
          <NavLink className='navbar__ul__li__link' to='/users'>Users list</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;