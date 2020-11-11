import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BobaFett from '../../../assets/images/bobaFett.png';
import './TopAppBar.css';
import ContainedButton from '../ContainedButton/ContainedButton';

const TopAppBar = () => {
  const location = useLocation();
  const history = useHistory();
  const pathName = location.pathname.split("/")[1];

  const getTitle = () => {
    switch(pathName) {
      case "people":
      case "person":
        return "PEOPLE";

      case "movies":
      case "movie":
        return "MOVIES";

      case "planets":
      case "planet":
        return "PLANETS";

      default:
        return "STAR WARS EXPLORER"
    }
  }

  const onRedirectHome = () => {
    history.push("/");
  }
  
  return (
    <div className="nav-outer">
      <AppBar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="home" onClick={() => onRedirectHome()}>
            <img src={BobaFett} alt="home" className="boba-fett" />
          </IconButton>
          <Typography variant="h6" color="inherit" className="title">{getTitle()}</Typography>
        </Toolbar>
      </AppBar>
      <div className="nav">
        <ContainedButton title="People" route="/people"/>
        <ContainedButton title="Movies" route="/movies"/>
        <ContainedButton title="Planets" route="/planets"/>
      </div>
    </div>
  );
}

export default TopAppBar;