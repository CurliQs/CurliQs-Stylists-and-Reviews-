import { RegisterTypes } from './register.types';
import jwt from 'jsonwebtoken'

const INITIAL_STATE = {
  addingUser: false,
  addedUser: false,
  user: jwt.decode(localStorage.getItem('token')),
  token: '',
  error: ''
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterTypes.REGISTER_START:
      return {
        ...state,
        addingUser: true,
        addedUser: false,
        error: '',
      }
    case  RegisterTypes.REGISTER_SUCCESS:
      return {
        ...state,
        addingUser: false,
        addedUser: true,
        user: action.payload.user,
        error: '',
      }
    case  RegisterTypes.REGISTER_FAIL:
      return {
        ...state,
        addedUser: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default registerReducer;