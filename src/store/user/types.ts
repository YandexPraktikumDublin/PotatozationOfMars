import { IUser } from '@types'

export interface IUserState {
  pending: boolean
  user: IUser | null
  error: string | null
}
