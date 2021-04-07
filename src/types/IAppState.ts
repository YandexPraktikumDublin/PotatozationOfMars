import { RouterState } from 'connected-react-router'
import { IAuthState } from '@store/auth/types'
import { ILogoutState } from '@store/logout/types'
import { ISignupState } from '@store/signup/types'
import { IUserState } from '@store/user/types'
import { ILeaderboardState } from '@store/leaderboard/fetchLeaderboard/types'
import { IGameState } from '@store/game/types'
import { ITopicsState } from '@store/topics/types'
import { ITopicState } from '@store/topic/types'
import { ICommentState } from '@store/comment/types'
import { ICommentsState } from '@store/comments/types'
import { IReactionState } from '@store/reaction/types'

export interface IAppState {
  auth: IAuthState
  logout: ILogoutState
  signup: ISignupState
  user: IUserState
  leaderboard: ILeaderboardState
  router: RouterState
  game: IGameState
  topic: ITopicState
  topics: ITopicsState
  comment: ICommentState
  comments: ICommentsState
  reaction: IReactionState
}
