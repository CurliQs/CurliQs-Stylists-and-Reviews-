import React, { useState, useEffect } from "react";
//loginc import
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import registerUser from "../../redux/curliQs/register/register.actions";
import { selectUser } from "../../redux/curliQs/register/register.selectors";
//styling import
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  MenuItem
} from "@material-ui/core";
import useStylesReg from "../../Styling/RegForm";
import Copyright from "../../Styling/Copyright";
import Q from "../../img/tQ.png";

export default function SignInSide() {
  const classes = useStylesReg();
  const [q, setQ] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
    hair_type: ""
  });

  const pattern = [
    {
      value: "2a",
      label: "2a"
    },
    {
      value: "2b",
      label: "2b"
    },
    {
      value: "2c",
      label: "2c"
    },
    {
      value: "3a",
      label: "3a"
    },
    {
      value: "3b",
      label: "3c"
    },
    {
      value: "4a",
      label: "4a"
    },
    {
      value: "4b",
      label: "4b"
    },
    {
      value: "4c",
      label: "4c"
    }
  ];
  const states = [
    {
      label: "Alabama",
      value: "Alabama"
    },
    {
      label: "Alaska",
      value: "Alaska"
    },
    {
      label: "Arizona",
      value: "Arizona"
    },
    {
      label: "Arkansas",
      value: "Arkansas"
    },
    {
      label: "California",
      value: "California"
    },
    {
      label: "Colorado",
      value: "Colorado"
    },
    {
      label: "Connecticut",
      value: "Connecticut"
    },
    {
      label: "Delaware",
      value: "Delaware"
    },
    {
      label: "Georgia",
      value: "Georgia"
    },
    {
      label: "Hawaii",
      value: "Hawaii"
    },
    {
      label: "Idaho",
      value: "Idaho"
    },
    {
      label: "Illinois",
      value: "Illinois"
    },
    {
      label: "Indiana",
      value: "Indiana"
    },
    {
      label: "Iowa",
      value: "Iowa"
    },
    {
      label: "Kansas",
      value: "Kansas"
    },
    {
      label: "Kentucky",
      value: "Kentucky"
    },
    {
      label: "Louisiana",
      value: "Louisiana"
    },
    {
      label: "Maine",
      value: "Maine"
    },
    {
      label: "Maryland",
      value: "Maryland"
    },
    {
      label: "Massachusets",
      value: "Massachusets"
    },
    {
      label: "Michigan",
      value: "Michigan"
    },
    {
      label: "Minnesota",
      value: "Minnesota"
    },
    {
      label: "Mississippi",
      value: "Mississippi"
    },
    {
      label: "Misouri",
      value: "Misouri"
    },
    {
      label: "Montana",
      value: "Montana"
    },
    {
      label: "Nebraska",
      value: "Nebraska"
    },
    {
      label: "Nevada",
      value: "Nevada"
    },
    {
      label: "New Hamphire",
      value: "New Hampshire"
    },
    {
      label: "New Jersey",
      value: "New Jersey"
    },
    {
      label: "New Mexico",
      value: "New Mexico"
    },
    {
      label: "New York",
      value: "New York"
    },
    {
      label: "North Carolina",
      value: "NorthCarolina"
    },
    {
      label: "North Dakota",
      value: "North Dakota"
    },
    {
      label: "Ohio",
      value: "Ohio"
    },
    {
      label: "Oklahoma",
      value: "Oklahoma"
    },
    {
      label: "Oregon",
      value: "Oregon"
    },
    {
      label: "Pennsylvania",
      value: "Pensylvania"
    },
    {
      label: "Rhode Island",
      value: "Rhode Island"
    },
    {
      label: "South Carolina",
      value: "South Carolina"
    },
    {
      label: "South Dakota",
      value: "South Dakota"
    },
    {
      label: "Tennessee",
      value: "Tennessee"
    },
    {
      label: "Texas",
      value: "Texas"
    },
    {
      label: "Utah",
      value: "Utah"
    },
    {
      label: "Vermont",
      value: "Vermont"
    },
    {
      label: "Virginia",
      value: "Virginia"
    },
    {
      label: "Washington",
      value: "Washington"
    },
    {
      label: "Washington DC",
      value: "Washington DC"
    },
    {
      label: "West Virginia",
      value: "West Virginia"
    },
    {
      label: "Wisconsin",
      value: "Wisconsin"
    },
    {
      label: "Wyoming",
      value: "Wyoming"
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();
    setQ({
      username: "",
      password: "",
      email: "",
      location: "",
      hair_type: ""
    });
  };

  const handleChange = e => {
    setQ({ ...q, [e.target.name]: e.target.value });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={Q}></Avatar>
          <Typography component="h1">CurliQ's Registration</Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Display Name"
              name="username"
              autoFocus
              onChange={handleChange}
              value={q.username}
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
              value={q.password}
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
              value={q.email}
              autoFocus
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="location"
              id="location"
              onChange={handleChange}
              value={q.location}
            /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              select
              fullWidth
              name="location"
              label="Location"
              type="location"
              id="location"
              onChange={handleChange}
              value={q.location}
              helperText="Choose your State"
            >
              {states.map(place => (
                <MenuItem key={place.value} value={place.value}>
                  {place.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              select
              autoFocus
              id="hair_type"
              name="hair_type"
              label="Hair Type"
              onChange={handleChange}
              value={q.hair_type}
            >
              {pattern.map(select => (
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
                <Link href="#" variant="body2">
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
