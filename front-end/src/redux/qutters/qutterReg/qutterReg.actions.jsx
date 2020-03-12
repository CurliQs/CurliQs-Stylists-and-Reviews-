import { qutterRegTypes } from "./qutterReg.types";
import axios from "axios";

const registerQutter = user => dispatch => {
	dispatch({ type: qutterRegTypes.QUTTER_REGISTER_START });
	axios
		.post("/qutter/register", user)
    .then(response =>
      {
        const token = response.data.token
        localStorage.setItem('token', token)
			dispatch({
				type: qutterRegTypes.QUTTER_REGISTER_SUCCESS,
				payload: response.data
			})}
		)
		.catch(err =>
			dispatch({ type: qutterRegTypes.QUTTER_REGISTER_FAIL, payload: err.response })
		);
};

export default registerQutter;