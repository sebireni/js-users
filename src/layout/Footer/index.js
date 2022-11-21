import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';


const Footer = () => {
  return (
    <div className='footer'> 
      <a className='footer__link--github' href='https://github.com/sebireni/js-users.git'>
        <GitHubIcon sx={{ color: '#1E1E1E' }} />
        sebireni
      </a>

      <a className='footer__link--dina' href='https://www.digitalnatives.hu/'>
        dina
        <EastIcon className='footer__link--dina__arrow' />
      </a>
      
    </div>
  );
};

export default Footer;