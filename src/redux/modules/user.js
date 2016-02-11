import $ from 'jquery';
import {getAPIUrl} from '../../constants';

export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(beginLogin(username));
    $.post(getAPIUrl() + '/api-token-auth/',
        {username, password},
        ({token}) => dispatch(loginSuccess(token)) 
    ).fail(() => dispatch(loginError()));
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
};

const initialState = {
  username: '', 
  token: '', 
  loggedIn: false, 
  loggingIn: false,
  loginError: false
};

export default function userReducer(state = {username: ''}, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
