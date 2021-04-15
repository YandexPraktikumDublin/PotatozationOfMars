import { IEnjoyer } from '@models'

export interface IEnjoyerState {
  pending: boolean
  enjoyer: IEnjoyer | null
  error: string | null
}
