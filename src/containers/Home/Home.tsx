import React from 'react';
import ContainedButton from '../../components/UI/ContainedButton/ContainedButton';
import './Home.css';

const Home = () => (
  <div className="list">
    <ContainedButton title="People" route="/People"/>
    <ContainedButton title="Movies" route="/Movies"/>
    <ContainedButton title="Planets" route="/Planets"/>
  </div>
);

export default Home;