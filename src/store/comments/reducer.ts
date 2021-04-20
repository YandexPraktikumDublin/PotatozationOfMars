import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './fetchComments/actionTypes'
import { TFetchCommentsActions } from './fetchComments/types'
import { TActions, ICommentsState } from './types'
import {
  ADD_COMMENT,
  ADD_COMMENTS,
  ADD_REACTION,
  REMOVE_REACTION
} from '@store/comments/actionTypes'
import {
  addNewCommentToCommentsArray,
  addNewReactionToCommentsArray,
  removeReactionFromCommentsArray
} from '@utils/comment'

type TCommonAction = TFetchCommentsActions | TActions

const initialState: ICommentsState = {
  pending: false,
  comments: [],
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): ICommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: action.payload.comments,
        error: null
      }
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        comments: [],
        error: action.payload.error
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: addNewCommentToCommentsArray(
          state.comments,
          action.payload.comment
        )
      }
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload.comments]
      }
    case ADD_REACTION:
      return {
        ...state,
        comments: addNewReactionToCommentsArray(
          state.comments,
          action.payload.reaction
        )
      }
    case REMOVE_REACTION:
      return {
        ...state,
        comments: removeReactionFromCommentsArray(
          state.comments,
          action.payload.reaction
        )
      }
    default:
      return state
  }
}
