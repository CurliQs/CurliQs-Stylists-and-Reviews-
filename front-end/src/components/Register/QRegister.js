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
	MenuItem,
	Link,
	Paper,
	Box,
	Grid,
	Typography
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
 ///todo post request
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

	const handleChange = e => {};
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar} src={Q}></Avatar>
					<Typography component="h1">CurliQ's Registration</Typography>
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
              type="password"
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
							select
						>
							<MenuItem value="1a">1a</MenuItem>
							<MenuItem value="1b">1b</MenuItem>
							<MenuItem value="1c">1c</MenuItem>
							<MenuItem value="1d">1d</MenuItem>
							<MenuItem value="2a">2a</MenuItem>
							<MenuItem value="2b">2b</MenuItem>
							<MenuItem value="2c">2c</MenuItem>
							<MenuItem value="2d">2d</MenuItem>
							<MenuItem value="3a">3a</MenuItem>
							<MenuItem value="3b">3b</MenuItem>
							<MenuItem value="3c">3c</MenuItem>
							<MenuItem value="3d">3d</MenuItem>
						</TextField>
						{/* want to make this a drop down of options clicking stylist can select more than one type */}

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
