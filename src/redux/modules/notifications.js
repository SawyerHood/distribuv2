export const NOTIFY = 'NOTIFY';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'

export const notify = (message) => {
  return {
    type: NOTIFY,
    payload: message
  }
};

export const closeNotification = () => {
  return {
    type: CLOSE_NOTIFICATION,
  }
}

export const actions = {
  notify,
  closeNotification
};

const ACTION_HANDLERS = {
  [NOTIFY]: (state, action) => {return {...state, message: action.payload, open: true}},
  [CLOSE_NOTIFICATION]: (state, action) => {return {...state, open: false}}
};

const initialState = {
  message: '',
  open: false
};

export default function notificationReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
