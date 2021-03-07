import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'
import logoutReducer from '@store/logout/reducer'

const createRootReducer = (history: any) =>
  combineReducers({
    user: userReducer,
    signup: signupReducer,
    auth: authReducer,
    logout: logoutReducer,
    router: connectRouter(history)
  })

export type AppState = ReturnType<typeof createRootReducer>

export default createRootReducer
