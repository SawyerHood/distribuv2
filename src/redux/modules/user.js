export const SET_USER = 'SET_USER'; /* this is just a test */

export const setUser = (username) => {
  return {
    type: SET_USER,
    payload: username
  }
};

export const actions = {
  setUser
};

const ACTION_HANDLERS = {
  [SET_USER]: (state, action) => {return {...state, username: action.payload}}
};

export default function userReducer(state = {username: ''}, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
