import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from '@store/user/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'
import logoutReducer from '@store/logout/reducer'
import leaderboardReducer from '@store/leaderboard/reducer'
import gameReducer from '@store/game/reducer'
import topicReducer from '@store/topic/reducer'
import topicsReducer from '@store/topics/reducer'
import commentReducer from '@store/comment/reducer'
import { History } from 'history'
import { IAppState } from '@types'

const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    user: userReducer,
    signup: signupReducer,
    auth: authReducer,
    logout: logoutReducer,
    leaderboard: leaderboardReducer,
    game: gameReducer,
    topic: topicReducer,
    topics: topicsReducer,
    comment: commentReducer,
    router: connectRouter(history)
  })

export default createRootReducer
