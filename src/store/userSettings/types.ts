import { IUserSettings } from '@models'

export interface IUserSettingsState {
  pending: boolean
  userSettings: IUserSettings | null
  error: string | null
}
