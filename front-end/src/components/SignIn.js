import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import useStylesSides from "../Styling/SideForm";
import Copyright from "../Styling/Copyright";
import Q from "../img/oQ.png";

export default function SignIn() {
  const classes = useStylesSides();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChanges = e => {
    if (e.target.name === "remember") {
      setInputs({ ...inputs, [e.target.name]: !inputs.remember });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={Q} />
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={inputs.email}
              autoComplete="email"
              autoFocus
              onChange={handleChanges}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={inputs.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChanges}
            />
            {/* <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  color="#36CED6"
                  onChange={handleChanges}
                />
              }
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link to="/"
                variant="body2" color="#36CED6">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item xs>
                <Link to="/register" variant="body2" color="#36CED6">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
