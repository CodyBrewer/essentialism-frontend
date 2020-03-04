import {
  LOG_USER_IN,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILURE,
  LOG_USER_OUT
} from "../Actions";

const initialState = {
  user: {
    userId: null,
    token: null,
    username: null
  },
  isLoggingIn: false,
  isRegisteringNewUser: false,
  error: null,
  isLoggedIn: false
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_USER_IN:
      return {
        ...state,
        isLoggingIn: true,
        error: null
      };
    case LOG_USER_IN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: payload.token,
          username: payload.username,
          userId: payload.userId
        },
        isLoggingIn: false,
        isLoggedIn: true,
        error: null
      };
    case LOG_USER_IN_FAILURE:
      return {
        ...state,
        isLogginIn: false,
        error: payload
      };
    case REGISTER_NEW_USER:
      return {
        ...state,
        isRegisteringNewUser: true,
        error: null
      };
    case REGISTER_NEW_USER_SUCCESS:
      return {
        ...state,
        isRegisteringNewUser: false,
        error: null
      };
    case REGISTER_NEW_USER_FAILURE:
      return {
        ...state,
        isRegisteringNewUser: false,
        error: payload
      };
    case LOG_USER_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
