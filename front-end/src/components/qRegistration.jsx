import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "./FormInput";
import registerUser from "../redux/curliQs/register/register.actions";
import { selectUser } from "../redux/curliQs/register/register.selectors";

class Registration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			email: "",
			location: "",
			hair_type: ""
		};

	}

	handleSubmit = async e => {
		e.preventDefault();

		// const { username, email, password } = this.state;
		console.log("hey from reg", this.state);

		this.props.newUser(this.state);
		// this.props.history.push("/login");
		this.setState({
			username: "",
			password: "",
			email: "",
			location: "",
			hair_type: ""
		});
	};

	handleChange = e => {
		const { value, name } = e.target;

		name === "userType"
			? this.setState({ [name]: parseFloat(value) })
			: this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Welcome New User</h2>

				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<FormInput
							name="username"
							type="text"
							handleChange={this.handleChange}
							value={this.state.username}
							label="username"
							required
						/>
						<FormInput
							name="password"
							type="password"
							value={this.state.password}
							handleChange={this.handleChange}
							label="password"
							required
						/>
					
						<FormInput
							name="email"
							type="email"
							value={this.state.email}
							handleChange={this.handleChange}
							label="email"
							required
						/>
						<FormInput
							name="location"
							type="text"
							value={this.state.location}
							handleChange={this.handleChange}
							label="location"
							required
						/>
					<FormInput
							name="hair_type"
							type="text"
							value={this.state.hair_type}
							handleChange={this.handleChange}
							label="hair_type"
							required
						/>
					</div>
					<div>
						<button className="button" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	// user: selectUser
});

const mapDispatchToProps = dispatch => ({
	newUser: user => dispatch(registerUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
