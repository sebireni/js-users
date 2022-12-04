import React from 'react';
import './Home.css';
import Contacts from '../../components/Contacts';

const Home = () => {
  return (
    <main className='home'>
      <h1 className='home__h1'>Second Assessment - Digital Natives</h1>
      <h2 className='home__h2'>∼ User list ∼</h2>
      <span className='home__text'>Task: Creating a front-end application, where you can handle user objects stored on a server-based application.</span>
      <Contacts/>
    </main>
  );
};

export default Home;