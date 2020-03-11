import React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import useStylesReg from '../Styling/RegForm'
import Copyright from '../Styling/Copyright'
import Q from '../img/tQ.png'


export default function SignInSide() {
  const classes = useStylesReg();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={Q}>
          </Avatar>
          <Typography component="h1">
            CurliQ's Registration
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="location"
              id="location"
            />
            {/* not sure about a 50 state drop down */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="hairtype"
              label="Hair Type"
              name="hairtype"
              autoFocus
            />
            {/* want to make this a drop down of options clicking stylist can select more than one type */}
            <FormControlLabel
              control={<Checkbox value="stylist" color="#36CED6" />}
              label="Stylist?"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" >
                  {"Already have an account? Sign In"}
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