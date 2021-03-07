import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'
import logoutReducer from '@store/logout/reducer'
import { History } from 'history'
import { IAppState } from '@types'

const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    user: userReducer,
    signup: signupReducer,
    auth: authReducer,
    logout: logoutReducer,
    router: connectRouter(history)
  })

export default createRootReducer
