import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const location = useLocation();

  let getTitle = () => {
    const pathName = location.pathname.split("/")[1];

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
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">{getTitle()}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;