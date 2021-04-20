import {
  FETCH_TOPIC_FAILURE,
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS
} from './fetchTopic/actionTypes'
import {
  CREATE_TOPIC_FAILURE,
  CREATE_TOPIC_REQUEST,
  CREATE_TOPIC_SUCCESS
} from '@store/topic/createTopic/actionTypes'
import { TFetchTopicActions } from './fetchTopic/types'
import { TCreateTopicActions } from './createTopic/types'
import { ITopicState } from './types'

type TCommonAction = TFetchTopicActions | TCreateTopicActions

const initialState: ITopicState = {
  pending: false,
  topic: null,
  error: null
}

export default (state = initialState, action: TCommonAction): ITopicState => {
  switch (action.type) {
    case FETCH_TOPIC_REQUEST:
    case CREATE_TOPIC_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_TOPIC_SUCCESS:
    case CREATE_TOPIC_SUCCESS:
      return {
        ...state,
        pending: false,
        topic: action.payload.topic,
        error: null
      }
    case FETCH_TOPIC_FAILURE:
    case CREATE_TOPIC_FAILURE:
      return {
        ...state,
        pending: false,
        topic: null,
        error: action.payload.error
      }
    default:
      return state
  }
}
