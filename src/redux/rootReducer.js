import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import { reducer as form} from 'redux-form'
import user from './modules/user'

export default combineReducers({
    user,
    router,
    form
});
