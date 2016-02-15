import $ from 'jquery';
import { getAPIUrl } from '../../constants';
import { actions as notificationActions } from './notifications'
import { routeActions } from 'react-router-redux'

export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const beginLogin = (username) => {
  return {
    type: BEGIN_LOGIN,
    payload: username
  }
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR
  };
};

export const logout = (newRoute = "/login") => {
  return (dispatch) => {
    dispatch({type: LOGOUT});
    dispatch(routeActions.push(newRoute));
  }
}

export const login = (username, password, newRoute = "/") => {
  return (dispatch) => {
    dispatch(beginLogin(username));
    $.post(getAPIUrl() + '/api-token-auth/',
        {username, password},
        ({token}) => {
          dispatch(loginSuccess(token));
          dispatch(notificationActions.notify('Login Sucessful'));
          dispatch(routeActions.push(newRoute));
        }
    ).fail(() => {
      dispatch(loginError());
      dispatch(notificationActions.notify('Login Failed'));
    });
  }
};

export const actions = {
  beginLogin,
  loginSuccess,
  loginError,
  login
};

const ACTION_HANDLERS = {
  [BEGIN_LOGIN]: (state, action) => {return {...state, username: action.payload, loggingIn: true}},
  [LOGIN_SUCCESS]: (state, action) => {return {...state, token: action.payload, loggingIn: false, loggedIn: true}},
  [LOGIN_ERROR]: (state, action) => {return {...state, loggingIn: false, username: '', loginError: true}},
  [LOGOUT]: (state, action) => {return {...state, loggedIn: false, username: '', token: ''}}
};

const initialState = {
  username: '',
  token: '',
  loggedIn: false,
  loggingIn: false,
  loginError: false
};

export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
