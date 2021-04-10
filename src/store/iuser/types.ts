import { IUser } from '@models'

export interface IIUserState {
  pending: boolean
  iuser: IUser | null
  error: string | null
}
