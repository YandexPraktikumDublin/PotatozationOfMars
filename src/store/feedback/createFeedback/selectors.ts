import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.feedback.pending

const getFeedback = (state: IAppState) => state.feedback.feedback

const getError = (state: IAppState) => state.feedback.error

export const getFeedbackPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getFeedbackSelector = createSelector(getFeedback, (iuser) => iuser)

export const getFeedbackErrorSelector = createSelector(
  getError,
  (error) => error
)
