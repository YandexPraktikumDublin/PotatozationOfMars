import { RouterState } from 'connected-react-router'
import { IAuthState } from '@store/auth/types'
import { ILogoutState } from '@store/logout/types'
import { ISignupState } from '@store/signup/types'
import { IUserState } from '@store/user/fetchUser/types'

export interface IAppState {
  auth: IAuthState
  logout: ILogoutState
  signup: ISignupState
  user: IUserState
  router: RouterState
}
