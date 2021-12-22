import {
  AUTH_ERRORS,
  GET_AUTH_USER,
  USER_LOADING,
  USER_LOGIN,
  USER_REGISTER,
  LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from "../constants/userConstants";

const initState = {
  isAuth: false,
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  msg: null,
};
const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        loading: false,
        ...payload,
        error: null,
        isAuth: true, // token ,msg
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        isAuth: true, // token ,msg
      };

    default:
      return state;
  }
};
export default userReducer;
