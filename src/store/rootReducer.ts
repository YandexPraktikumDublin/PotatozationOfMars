import { combineReducers } from 'redux'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  auth: authReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
