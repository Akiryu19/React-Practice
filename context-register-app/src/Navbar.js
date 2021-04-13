import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles/NavbarStyles';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span>🇺🇸</span>
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            Register
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Switch />
          <div className={classes.grow}></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
