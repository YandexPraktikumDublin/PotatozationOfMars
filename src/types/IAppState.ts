import { RouterState } from 'connected-react-router'
import { IAuthState } from '@store/auth/types'
import { ILogoutState } from '@store/logout/types'
import { ISignupState } from '@store/signup/types'
import { IUserState } from '@store/user/fetchUser/types'
import { ILeaderboardState } from '@store/leaderboard/fetchLeaderboard/types'
import { IGameState } from '@store/game/types'
import { ITopicState } from '@store/topic/fetchTopic/types'

export interface IAppState {
  auth: IAuthState
  logout: ILogoutState
  signup: ISignupState
  user: IUserState
  leaderboard: ILeaderboardState
  router: RouterState
  game: IGameState
  topic: ITopicState
}
