import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import Q from "../../img/oQ.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src="Q" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Curli~Q's Styles'n'Reviews
          </Typography>
          <NavLink to="/register">
            <Button color="inherit">Signin</Button>
          </NavLink>
          <NavLink to="/register">
            <Button color="inherit">SignUp</Button>
          </NavLink>
          <Button color="inherit">Curli~Q's</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
