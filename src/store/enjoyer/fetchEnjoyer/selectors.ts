import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.enjoyer.pending

const getEnjoyer = (state: IAppState) => state.enjoyer.enjoyer

const getError = (state: IAppState) => state.enjoyer.error

export const getEnjoyerPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getEnjoyerSelector = createSelector(
  getEnjoyer,
  (enjoyer) => enjoyer
)

export const getEnjoyerErrorSelector = createSelector(
  getError,
  (error) => error
)
