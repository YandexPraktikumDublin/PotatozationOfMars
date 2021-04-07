import {
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILURE
} from './actionTypes'
import { TFetchTopicActions, ITopicState } from './types'

const initialState: ITopicState = {
  pending: false,
  error: '',
  topic: {
    subject: '',
    content: '',
    userId: 0
  }
}

export default (
  state = initialState,
  action: TFetchTopicActions
): ITopicState => {
  switch (action.type) {
    case FETCH_TOPIC_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_TOPIC_SUCCESS:
      return {
        ...state,
        pending: false,
        topic: action.payload,
        error: ''
      }
    case FETCH_TOPIC_FAILURE:
      return {
        ...state,
        pending: false,
        topic: {
          subject: '',
          content: '',
          userId: 0
        },
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
