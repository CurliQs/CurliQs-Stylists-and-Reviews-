import { RegisterTypes } from "./register.types";
import axios from "axios";

const registerUser = user => dispatch => {
	dispatch({ type: RegisterTypes.REGISTER_START });
	axios
		.post("/curliq/register", user)
    .then(response =>
      {
        const token = response.data.token
        localStorage.setItem('token', token)
			dispatch({
				type: RegisterTypes.REGISTER_SUCCESS,
				payload: response.data
			})}
		)
		.catch(err =>
			dispatch({ type: RegisterTypes.REGISTER_FAIL, payload: err.response })
		);
};

export default registerUser;