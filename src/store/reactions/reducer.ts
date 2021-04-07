import {
  FETCH_REACTIONS_REQUEST,
  FETCH_REACTIONS_SUCCESS,
  FETCH_REACTIONS_FAILURE
} from './fetchReactions/actionTypes'
import { TFetchReactionsActions } from './fetchReactions/types'
import { IReactionsState } from './types'

type TCommonAction = TFetchReactionsActions

const initialState: IReactionsState = {
  pending: false,
  reactions: [],
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): IReactionsState => {
  switch (action.type) {
    case FETCH_REACTIONS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_REACTIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        reactions: action.payload.reactions,
        error: null
      }
    case FETCH_REACTIONS_FAILURE:
      return {
        ...state,
        pending: false,
        reactions: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
