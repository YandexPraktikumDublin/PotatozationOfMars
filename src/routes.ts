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
    component: Auth,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.FORUM,
    exact: true,
    component: Forum,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.FORUM_TOPIC,
    exact: false,
    component: ForumTopic,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.GAME,
    exact: false,
    component: Game,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.LEADERBOARD,
    exact: false,
    component: Leaderboard,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.PROFILE,
    exact: false,
    component: Profile,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.SIGNUP,
    exact: false,
    component: SignUp,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: '*',
    exact: false,
    component: Error404
  }
]
