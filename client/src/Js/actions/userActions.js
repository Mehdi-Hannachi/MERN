import axios from "axios";
import {
  AUTH_ERRORS,
  GET_AUTH_USER,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
  LOGOUT,
  USER_LOADING,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

/********************** User register action creator ******************** */

export const register = (formData) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    // const config={
    //     headers:{
    //         "x-auth":
    //     }
    // }
    const res = await axios.post("/api/auth/register", formData);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data, // {msg:"user registered",token}
    });
  } catch (error) {
    console.dir(error);
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** Logout action creator *********************** */

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

/********************** Login action creator *********************** */

export const login = (formData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/api/auth/login", formData);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data, //{msg:"user logged",token}
    });

    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.dir(error);

    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error.response.message.data,
    });
  }
};

export const getAuthUser = () => async (dispatch) => {
  dispatch({
    type: GET_AUTH_USER,
  });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/api/auth/me", config);
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      payload: res.data, //{user:req.user}
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: GET_AUTH_USER_FAILED,
      payload: error.response.data,
    });
  }
};
