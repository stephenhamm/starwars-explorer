import React from 'react';
import { Fade } from "react-awesome-reveal";
import Logo from '../../assets/images/starWarsLogo.png';
import ExplorerText from '../../assets/images/explorer.png'
import './Home.css';

const Home = () => (
  <Fade>
    <div className="content">
      <div className="content-inner">
        <div className="content-left">
          <img src={Logo} alt="starWars" className="star-wars-logo" />
          <img src={ExplorerText} alt="explorer" className="explorer-text" />
        </div>    
        <div className="content-right">
          <span className="description-top">The Star Wars Explorer is a simple application for viewing information on your favorite Star Wars movies, characters, and planets.</span>
          <span className="description-bottom">Click the buttons above to view details.</span>
        </div>
      </div>
    </div>
  </Fade>
);

export default Home;