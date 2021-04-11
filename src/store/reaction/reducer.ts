import {
  FETCH_REACTION_FAILURE,
  FETCH_REACTION_REQUEST,
  FETCH_REACTION_SUCCESS
} from './fetchReaction/actionTypes'
import {
  CREATE_REACTION_FAILURE,
  CREATE_REACTION_REQUEST,
  CREATE_REACTION_SUCCESS
} from '@store/reaction/createReaction/actionTypes'
import {
  DELETE_REACTION_FAILURE,
  DELETE_REACTION_REQUEST,
  DELETE_REACTION_SUCCESS
} from '@store/reaction/deleteReaction/actionTypes'
import { TFetchReactionActions } from './fetchReaction/types'
import { TCreateReactionActions } from './createReaction/types'
import { TDeleteReactionActions } from '@store/reaction/deleteReaction/types'
import { IReactionState } from './types'

type TCommonAction =
  | TFetchReactionActions
  | TCreateReactionActions
  | TDeleteReactionActions

const initialState: IReactionState = {
  pending: false,
  reaction: null,
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): IReactionState => {
  switch (action.type) {
    case FETCH_REACTION_REQUEST:
    case CREATE_REACTION_REQUEST:
    case DELETE_REACTION_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_REACTION_SUCCESS:
    case CREATE_REACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        reaction: action.payload.reaction,
        error: null
      }
    case DELETE_REACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        reaction: null,
        error: null
      }
    case FETCH_REACTION_FAILURE:
    case CREATE_REACTION_FAILURE:
    case DELETE_REACTION_FAILURE:
      return {
        ...state,
        pending: false,
        reaction: null,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
