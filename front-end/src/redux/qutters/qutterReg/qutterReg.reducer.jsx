import { qutterRegTypes } from "./qutterReg.types";
import jwt from "jsonwebtoken";

const INITIAL_STATE = {
	addingQutter: false,
	addedQutter: false,
	qutter: jwt.decode(localStorage.getItem("token")),
	token: "",
	error: ""
};

const registerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case qutterRegTypes.QUTTER_REGISTER_START:
			return {
				...state,
				addingQutter: true,
				addedQutter: false,
				error: ""
			};
		case qutterRegTypes.QUTTER_REGISTER_SUCCESS:
			return {
				...state,
				addingQutter: false,
				addedQutter: true,
				qutter: action.payload.qutter,
				error: ""
			};
		case qutterRegTypes.QUTTER_REGISTER_FAIL:
			return {
				...state,
				addedQutter: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default registerReducer;
