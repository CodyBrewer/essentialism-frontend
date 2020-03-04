import {
  SELECT_VALUE,
  NARROW_VALUE,
  LOG_USER_IN,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILURE,
  LOG_USER_OUT
} from "./types";
import Axios from "axios";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const narrowValue = item => dispatch => {
  dispatch({ type: NARROW_VALUE, payload: item });
};

export const loginUser = userCredentials => dispatch => {
  dispatch({ type: LOG_USER_IN });
  Axios.post(
    // `https://essentialism2020.herokuapp.com/api/essentialism/user/login`,
    `http://localhost:4000/api/essentialism/user/login`,
    userCredentials
  )
    .then(res => {
      dispatch({ type: LOG_USER_IN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_USER_IN_FAILURE, payload: err.message });
    });
};

export const registerUser = userCredentials => dispatch => {
  dispatch({ type: REGISTER_NEW_USER });
  Axios.post(
    // `https://essentialism2020.herokuapp.com/api/essentialism/register`,
    `http://localhost:4000/api/essentialism/user/register`,
    userCredentials
  )
    .then(res => {
      dispatch({ type: REGISTER_NEW_USER_SUCCESS, payload: res.data });
      dispatch(loginUser(userCredentials));
    })
    .catch(err => {
      dispatch({ type: REGISTER_NEW_USER_FAILURE, payload: err.message });
    });
};

export const logoutUser = dispatch => {
  dispatch({ type: LOG_USER_OUT });
};
