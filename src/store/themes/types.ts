import { ITheme } from '@models'

export interface IThemesState {
  pending: boolean
  themes: ITheme[]
  error: string | null
}
