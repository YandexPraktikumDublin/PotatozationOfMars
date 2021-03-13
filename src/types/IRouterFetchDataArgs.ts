import { Dispatch } from 'react'
import { match } from 'react-router'
import { Action } from 'redux'

export interface IRouterFetchDataArgs {
  dispatch: Dispatch<Action>
  match: match<{ slug: string }>
}
