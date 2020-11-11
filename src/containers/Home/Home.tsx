import React from 'react';
import Logo from '../../assets/images/starWarsLogo.png';
import './Home.css';

const Home = () => (
  <div className="content">
    <img src={Logo} alt="starWars" className="star-wars-logo" />
  </div>
);

export default Home;