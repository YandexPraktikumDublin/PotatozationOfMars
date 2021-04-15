import { IEnjoyerSettings } from '@models'

export interface IEnjoyerSettingsState {
  pending: boolean
  enjoyerSettings: IEnjoyerSettings | null
  error: string | null
}
