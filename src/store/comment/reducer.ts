import {
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS
} from './fetchComment/actionTypes'
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS
} from '@store/comment/createComment/actionTypes'
import { TFetchCommentActions } from './fetchComment/types'
import { TCreateCommentActions } from './createComment/types'
import { ICommentState } from './types'

type TCommonAction = TFetchCommentActions | TCreateCommentActions

const initialState: ICommentState = {
  pending: false,
  comment: null,
  error: null
}

export default (state = initialState, action: TCommonAction): ICommentState => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_COMMENT_SUCCESS:
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        comment: action.payload.comment,
        error: null
      }
    case FETCH_COMMENT_FAILURE:
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        pending: false,
        comment: null,
        error: action.payload.error
      }
    default:
      return state
  }
}
