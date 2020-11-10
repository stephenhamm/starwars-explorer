import React from 'react';
import ContainedButton from '../../components/UI/ContainedButton/ContainedButton';
import './Home.css';

const Home = () => (
  <div className="list">
    <ContainedButton title="People" route="/people"/>
    <ContainedButton title="Movies" route="/movies"/>
    <ContainedButton title="Planets" route="/planets"/>
  </div>
);

export default Home;