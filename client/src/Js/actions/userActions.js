import axios from "axios";
import {
  AUTH_ERRORS,
  GET_AUTH_USER,
  LOGOUT,
  USER_LOADING,
  USER_LOGIN,
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
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", formData);

    dispatch({
      type: USER_LOGIN,
      payload: res.data, //{msg:"user logged",token}
    });
  } catch (error) {
    console.dir(error);

    dispatch({
      type: AUTH_ERRORS,
      payload: error.response.message.data,
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const getAuthUser = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOADING,
    });
    const config = {
      headers: {
        "x-auth": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/auth/me", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, //{user:req.user}
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: AUTH_ERRORS,
      payload: error.response.data,
    });
  }
};
