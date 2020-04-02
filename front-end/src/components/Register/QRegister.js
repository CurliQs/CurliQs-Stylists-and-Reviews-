import React, { useState, useEffect } from "react";
//loginc import
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import registerUser from "../../redux/curliQs/register/register.actions";
import { selectUser } from "../../redux/curliQs/register/register.selectors";
//styling import
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, MenuItem } from '@material-ui/core';
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

    const pattern = [
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
    const states = [
      {
        object: 'Alabama',
        value: 'Alabama'
      },
      {
      object: 'Alaska',
      value: 'Alaska'
       },
    {
    object: 'Arizona',
    value: 'Arizona'
    },
    {
    object: 'Arkansas',
    value: 'Arkansas'
    },
    {
      object: 'California',
      value: 'California'
    },
    {
      object: 'Colorado',
      value: 'Colorado'
    },
    {
      object: 'Connecticut',
      value: 'Connecticut'
    },
    {
      object: 'Delaware',
      value: 'Delaware'
    },
    {
      object: 'Georgia',
      value: 'Georgia'
    },
    {
      object: 'Hawaii',
      value: 'Hawaii'
    },
    {
      object: 'Idaho',
      value: 'Idaho'
    },
    {
      object: 'Illinois',
      value: 'Illinois'
    },
    {
      object: 'Indiana',
      value: 'Indiana'
    },
    {
      object: 'Iowa',
      value: 'Iowa'
    },
    {
      object: 'Kansas',
      value: 'Kansas'
    },
    {
      object: 'Kentucky',
      value: 'Kentucky'
    },
    {
      object: 'Louisiana',
      value: 'Louisiana'
    },
    {
      object: 'Maine',
      value: 'Maine'
    },
    {
      object: 'Maryland',
      value: 'Maryland'
    },
    {
      object: 'Massachusets',
      value: 'Massachusets'
    },
    {
      object: 'Michigan',
      value: 'Michigan'
    },
    {
      object: 'Minnesota',
      value: 'Minnesota'
    },
    {
      object: 'Mississippi',
      value: 'Mississippi'
    },
    {
      object: 'Misouri',
      value: 'Misouri'
    },
    {
      object: 'Montana',
      value: 'Montana'
    },
    {
      object: 'Nebraska',
      value: 'Nebraska'
    },
    {
      object: 'Nevada',
      value: 'Nevada'
    },
    {
      object: 'New Hamphire',
      value: 'New Hampshire'
    },
    {
      object: 'New Jersey',
      value: 'New Jersey'
    },
    {
      object: 'New Mexico',
      value: 'New Mexico'
    },
    {
      object: 'New York',
      value: 'New York'
    },
    {
      object: 'North Carolina',
      value: 'NorthCarolina'
    },
    {
      object: 'North Dakota',
      value: 'North Dakota'
    },
    {
      object: 'Ohio',
      value: 'Ohio'
    },
    {
      object: 'Oklahoma',
      value: 'Oklahoma'
    },
    {
      object: 'Oregon',
      value: 'Oregon'
    },
    {
      object: 'Pennsylvania',
      value: 'Pensylvania'
    },
    {
      object: 'Rhode Island',
      value: 'Rhode Island'
    },
    {
      object: 'South Carolina',
      value: 'South Carolina'
    },
    {
      object: 'South Dakota',
      value: 'South Dakota'
    },
    {
      object: 'Tennessee',
      value: 'Tennessee'
    },
    {
      object: 'Texas',
      value: 'Texas'
    },
    {
      object: 'Utah',
      value: 'Utah'
    },
    {
      object: 'Vermont',
      value: 'Vermont'
    },
    {
      object: 'Virginia',
      value: 'Virginia'
    },
    {
      object: 'Washington',
      value: 'Washington'
    },
    {
      object: 'Washington DC',
      value: 'Washington DC'
    },
    {
      object: 'West Virginia',
      value: 'West Virginia'
    },
    {
      object: 'Wisconsin',
      value: 'Wisconsin'
    },
    {
      object: 'Wyoming',
      value: 'Wyoming'
    }
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
              value={q.location}
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
              value={location}
              helperText="Choose your State">
                {states.map(place => (
                  <MenuItem key={place.value} value={place.value}>
                    {place.label}
                  </MenuItem>
                ))}
              </TextField> */}
            
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
