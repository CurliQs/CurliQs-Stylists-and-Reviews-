import React, { useState, useEffect } from 'react';
//loginc import
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import registerUser from "../../redux/curliQs/register/register.actions";
import { selectUser } from "../../redux/curliQs/register/register.selectors";
//styling import
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import useStylesReg from '../../Styling/RegForm'
import Copyright from '../../Styling/Copyright'
import Q from '../../img/tQ.png'


export default function SignInSide() {
  const classes = useStylesReg();
  const [q, setQ] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
    hair_type: ""})

    const hairType = [
      {
        value: '2a',
        label: '2a',
      },
      {
        value: '2b',
        label: '2b',
      },
      {
        value: '2c',
        label: '2c',
      },
      {
        value: '3a',
        label: '3a',
      },
      {
        value: '3b',
        label: '3c',
      },
      {
        value: '4a',
        label: '4a',
      },
      {
        value: '4b',
        label: '4b',
      },
      {
        value: '4c',
        label: '4c',
      },
    ]

    const handleSubmit = e => {
      e.preventDefault()
      setQ({
        username: "",
        password: "",
        email: "",
        location: "",
        hair_type: ""
      })
    }

    const handleChange = e => {
      setQ({ ...q, [e.target.name]: e.target.value })
    }
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
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoFocus
              onChange={handleChange}
              value={username}
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
              onChange={handleChange}
              value={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
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
              onChange={handleChange}
              value={location}
            />
            {/* not sure about a 50 state drop down */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="hairtype"
              label="Hair Type"
              name="hair_type"
              autoFocus
              onChange={handleChange}
              value={hair_type}
              helperText="Please Choose your Overall Hair Type">
                {hairType.map(select => (
                  <MenuItem key={select.value} value={select.value}>
                    {select.label}
                  </MenuItem>
                ))}
              </TextField>
            
           
         
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

