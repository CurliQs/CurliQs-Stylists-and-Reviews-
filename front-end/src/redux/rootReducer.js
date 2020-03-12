import { combineReducers } from "redux";
import registerReducer from "./curliQs/register/register.reducer";
import registerQutterReducer from "./qutters/qutterReg/qutterReg.reducer";


export default combineReducers({
	registerQReducer: registerReducer,
	registerQutter: registerQutterReducer
});
