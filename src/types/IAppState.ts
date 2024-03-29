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
import { IReactionsState } from '@store/reactions/types'
import { IThemesState } from '@store/themes/types'
import { IEnjoyerSettingsState } from '@store/enjoyerSettings/types'
import { IEnjoyerState } from '@store/enjoyer/types'
import { IFeedbackState } from '@store/feedback/types'

export interface IAppState {
  auth: IAuthState
  logout: ILogoutState
  signup: ISignupState
  user: IUserState
  enjoyer: IEnjoyerState
  leaderboard: ILeaderboardState
  router: RouterState
  game: IGameState
  topic: ITopicState
  topics: ITopicsState
  comment: ICommentState
  comments: ICommentsState
  reaction: IReactionState
  reactions: IReactionsState
  themes: IThemesState
  feedback: IFeedbackState
  enjoyerSettings: IEnjoyerSettingsState
}
