import { combineReducers } from 'redux'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
