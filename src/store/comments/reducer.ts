import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './fetchComments/actionTypes'
import { TFetchCommentsActions } from './fetchComments/types'
import { ICommentsState } from './types'

type TCommonAction = TFetchCommentsActions

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
    default:
      return {
        ...state
      }
  }
}
