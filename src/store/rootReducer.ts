import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from '@store/user/reducer'
import enjoyerReducer from '@store/enjoyer/reducer'
import signupReducer from '@store/signup/reducer'
import authReducer from '@store/auth/reducer'
import logoutReducer from '@store/logout/reducer'
import leaderboardReducer from '@store/leaderboard/reducer'
import gameReducer from '@store/game/reducer'
import topicReducer from '@store/topic/reducer'
import topicsReducer from '@store/topics/reducer'
import commentReducer from '@store/comment/reducer'
import commentsReducer from '@store/comments/reducer'
import reactionReducer from '@store/reaction/reducer'
import reactionsReducer from '@store/reactions/reducer'
import themesReducer from '@store/themes/reducer'
import enjoyerSettingsReducer from '@store/enjoyerSettings/reducer'
import feedbackReducer from '@store/feedback/reducer'
import { History } from 'history'
import { IAppState } from '@types'

const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    user: userReducer,
    enjoyer: enjoyerReducer,
    signup: signupReducer,
    auth: authReducer,
    logout: logoutReducer,
    leaderboard: leaderboardReducer,
    game: gameReducer,
    topic: topicReducer,
    topics: topicsReducer,
    comment: commentReducer,
    comments: commentsReducer,
    reaction: reactionReducer,
    reactions: reactionsReducer,
    themes: themesReducer,
    enjoyerSettings: enjoyerSettingsReducer,
    feedback: feedbackReducer,
    router: connectRouter(history)
  })

export default createRootReducer
