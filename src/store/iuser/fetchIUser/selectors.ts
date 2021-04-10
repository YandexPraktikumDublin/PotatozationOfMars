import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.iuser.pending

const getIUser = (state: IAppState) => state.iuser.iuser

const getError = (state: IAppState) => state.iuser.error

export const getIUserPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getIUserSelector = createSelector(getIUser, (iuser) => iuser)

export const getIUserErrorSelector = createSelector(getError, (error) => error)
