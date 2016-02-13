import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore ({ initialState = {}, history }) {
  // Sync with router via history instance (main.js)
  const routerMiddleware = syncHistory(history);

  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware);

  const store = middleware(createStore)(rootReducer, initialState);

  return store;
}
