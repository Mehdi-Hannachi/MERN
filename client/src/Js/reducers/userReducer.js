import {
  AUTH_ERRORS,
  GET_AUTH_USER,
  USER_LOADING,
  USER_LOGIN,
  USER_REGISTER,
  LOGOUT,
} from "../constants/userConstants";

const initState = {
  isAuth: false,
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  msg: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REGISTER:
    case USER_LOGIN:
      console.log("token", action.payload.token);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
        isAuth: true, // token ,msg
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
        token: null,
        msg: null,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ERRORS:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
