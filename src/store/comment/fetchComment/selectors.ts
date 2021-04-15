import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.comment.pending

const getComment = (state: IAppState) => state.comment.comment

const getError = (state: IAppState) => state.comment.error

export const getCommentPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getCommentSelector = createSelector(
  getComment,
  (comment) => comment
)

export const getCommentErrorSelector = createSelector(
  getError,
  (error) => error
)
