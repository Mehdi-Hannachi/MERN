import {
  AUTH_ERRORS,
  GET_AUTH_USER,
  USER_LOADING,
  USER_LOGIN,
  USER_REGISTER,
  LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
} from "../constants/userConstants";

const initState = {
  isAuth: false,
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  msg: null,
  error: null,
};
const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_AUTH_USER:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
        isAuth: true, // token ,msg
      };

    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,

        isAuth: true, // token ,msg
      };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        loading: false,
        ...payload,
        error: null,
        isAuth: true, // token ,msg
      };
    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
    case GET_AUTH_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        isAuth: false, // token ,msg
      };

    case LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
export default userReducer;
