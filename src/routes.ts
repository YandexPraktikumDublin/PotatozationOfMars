import { fetchUserRequest } from '@store/user/fetchUser/actions'
import { IRouterFetchDataArgs } from '@types'
import loadable from '@loadable/component'
import { PATHS } from '@config'
import { fetchLeaderboardRequest } from '@store/leaderboard/fetchLeaderboard/actions'
import { fetchTopicsRequest } from '@store/topics/fetchTopics/actions'
import { fetchEnjoyerSettingsRequest } from '@store/enjoyerSettings/fetchEnjoyerSettings/actions'
import { fetchEnjoyerRequest } from '@store/enjoyer/fetchEnjoyer/actions'
import { fetchThemesRequest } from '@store/themes/fetchThemes/actions'

const Auth = loadable(() => import('./pages/Auth'))
const Error404 = loadable(() => import('./pages/Error404'))
const Forum = loadable(() => import('./pages/Forum'))
const ForumTopic = loadable(() => import('./pages/ForumTopic'))
const Game = loadable(() => import('./pages/Game'))
const Leaderboard = loadable(() => import('./pages/Leaderboard'))
const Profile = loadable(() => import('./pages/Profile'))
const SignUp = loadable(() => import('./pages/SignUp'))
const Start = loadable(() => import('./pages/Start'))

export default [
  {
    path: PATHS.BASE,
    component: Start,
    exact: true,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
    }
  },
  {
    path: PATHS.AUTH,
    component: Auth,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
    }
  },
  {
    path: PATHS.FORUM,
    component: Forum,
    exact: true,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
      dispatch(fetchTopicsRequest())
    }
  },
  {
    path: PATHS.FORUM_TOPIC,
    component: ForumTopic,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
    }
  },
  {
    path: PATHS.GAME,
    component: Game,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
    }
  },
  {
    path: PATHS.LEADERBOARD,
    component: Leaderboard,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
      dispatch(fetchLeaderboardRequest({ cursor: 0 }))
    }
  },
  {
    path: PATHS.PROFILE,
    component: Profile,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchThemesRequest())
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
      dispatch(fetchEnjoyerSettingsRequest())
    }
  },
  {
    path: PATHS.SIGNUP,
    component: SignUp,
    exact: false,
    fetchData({ dispatch }: IRouterFetchDataArgs) {
      dispatch(fetchUserRequest())
      dispatch(fetchEnjoyerRequest())
    }
  },
  {
    path: '*',
    exact: false,
    component: Error404
  }
]
