import {
  CREATE_FEEDBACK_FAILURE,
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS
} from './createFeedback/actionTypes'
import { TCreateFeedbackActions } from './createFeedback/types'
import { IFeedbackState } from './types'

type TCommonAction = TCreateFeedbackActions

const initialState: IFeedbackState = {
  pending: false,
  feedback: null,
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): IFeedbackState => {
  switch (action.type) {
    case CREATE_FEEDBACK_REQUEST:
      return {
        ...state,
        pending: true
      }
    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        pending: false,
        feedback: action.payload.feedback,
        error: null
      }
    case CREATE_FEEDBACK_FAILURE:
      return {
        ...state,
        pending: false,
        feedback: null,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
