import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BobaFett from '../../../assets/images/bobaFett.png';
import './TopAppBar.css';

const TopAppBar = () => {
  const location = useLocation();
  const history = useHistory();
  const pathName = location.pathname.split("/")[1];

  const getTitle = () => {
    switch(pathName) {
      case "people":
      case "person":
        return "People";

      case "movies":
      case "movie":
        return "Movies";

      case "planets":
      case "planet":
        return "Planets";

      default:
        return "Star Wars Explorer"
    }
  }

  const onRedirectHome = () => {
    history.push("/");
  }

  const onBackButton = () => {
    if (pathName) {
      return (
        <IconButton edge="end" color="inherit" aria-label="back" onClick={history.goBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      );
    } 
  }
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="home" onClick={() => onRedirectHome()}>
            <img src={BobaFett} alt="home" className="boba-fett" />
          </IconButton>
          <Typography variant="h6" color="inherit" className="title">{getTitle()}</Typography>
          {onBackButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;