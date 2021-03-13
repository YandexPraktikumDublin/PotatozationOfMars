import { fetchUserRequest } from '@store/user/fetchUser/actions'
import { IRouterFetchDataArgs } from '@types'
import {
  Auth,
  Error404,
  Forum,
  ForumTopic,
  Game,
  Leaderboard,
  Profile,
  SignUp,
  Start
} from '@pages'
import { PATHS } from '@config'

export default [
  {
    path: PATHS.BASE,
    component: Start,
    exact: true,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.AUTH,
    exact: false,
    component: Auth
  },
  {
    path: PATHS.FORUM,
    exact: true,
    component: Forum
  },
  {
    path: PATHS.FORUM_TOPIC,
    exact: false,
    component: ForumTopic
  },
  {
    path: PATHS.GAME,
    exact: false,
    component: Game
  },
  {
    path: PATHS.LEADERBOARD,
    exact: false,
    component: Leaderboard
  },
  {
    path: PATHS.PROFILE,
    exact: false,
    component: Profile
  },
  {
    path: PATHS.SIGNUP,
    exact: false,
    component: SignUp
  },
  {
    path: '*',
    exact: false,
    component: Error404
  }
]
