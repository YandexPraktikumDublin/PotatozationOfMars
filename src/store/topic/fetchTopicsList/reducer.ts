import {
  FETCH_TOPICS_LIST_REQUEST,
  FETCH_TOPICS_LIST_SUCCESS,
  FETCH_TOPICS_LIST_FAILURE
} from './actionTypes'
import { TFetchTopicsListActions, ITopicsListState } from './types'

const initialState: ITopicsListState = {
  pending: false,
  error: '',
  topics: []
}

export default (
  state = initialState,
  action: TFetchTopicsListActions
): ITopicsListState => {
  switch (action.type) {
    case FETCH_TOPICS_LIST_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_TOPICS_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        topics: [action.payload],
        error: ''
      }
    case FETCH_TOPICS_LIST_FAILURE:
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
