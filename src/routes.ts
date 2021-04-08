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
import { fetchLeaderboardRequest } from '@store/leaderboard/fetchLeaderboard/actions'
import { fetchTopicsRequest } from '@store/topics/fetchTopics/actions'

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
    component: Auth,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.FORUM,
    component: Forum,
    exact: true,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
      dispatch(fetchTopicsRequest())
    }
  },
  {
    path: PATHS.FORUM_TOPIC,
    component: ForumTopic,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.GAME,
    component: Game,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.LEADERBOARD,
    component: Leaderboard,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
      dispatch(fetchLeaderboardRequest({ cursor: 0 }))
    }
  },
  {
    path: PATHS.PROFILE,
    component: Profile,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
    }
  },
  {
    path: PATHS.SIGNUP,
    component: SignUp,
    exact: false,
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
