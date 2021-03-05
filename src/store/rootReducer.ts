import { combineReducers } from 'redux'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'
import logoutReducer from '@store/logout/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  auth: authReducer,
  logout: logoutReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
