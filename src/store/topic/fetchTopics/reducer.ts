import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE
} from './actionTypes'
import { TFetchTopicsActions, ITopicsState } from './types'

const initialState: ITopicsState = {
  pending: false,
  topics: [],
  error: null
}

export default (
  state = initialState,
  action: TFetchTopicsActions
): ITopicsState => {
  switch (action.type) {
    case FETCH_TOPICS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        pending: false,
        topics: action.payload.topics,
        error: null
      }
    case FETCH_TOPICS_FAILURE:
      return {
        ...state,
        pending: false,
        topics: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
