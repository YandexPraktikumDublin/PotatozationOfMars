import {
  FETCH_THEMES_REQUEST,
  FETCH_THEMES_SUCCESS,
  FETCH_THEMES_FAILURE
} from './fetchThemes/actionTypes'
import { TFetchThemesActions } from './fetchThemes/types'
import { IThemesState } from './types'

type TCommonAction = TFetchThemesActions

const initialState: IThemesState = {
  pending: false,
  themes: [],
  error: null
}

export default (state = initialState, action: TCommonAction): IThemesState => {
  switch (action.type) {
    case FETCH_THEMES_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_THEMES_SUCCESS:
      return {
        ...state,
        pending: false,
        themes: action.payload.themes,
        error: null
      }
    case FETCH_THEMES_FAILURE:
      return {
        ...state,
        pending: false,
        themes: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
