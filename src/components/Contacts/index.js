import React from 'react';
import './Contacts.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';


const Contacts = () => {
  return (
    <div className='contact'> 
      <a className='contact__link--github' href='https://github.com/sebireni/js-users.git'>
        <GitHubIcon sx={{ color: '#999' }} />
        sebireni
      </a>

      <a className='contact__link--dina' href='https://www.digitalnatives.hu/'>
        dina
        <EastIcon className='contact__link--dina__arrow' />
      </a>
      
    </div>
  );
};

export default Contacts;