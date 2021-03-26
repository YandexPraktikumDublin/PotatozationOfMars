import {
  TOGGLE_CONTROLS,
  SET_FULLSCREEN_ICON,
  TOGGLE_PAUSE, UPDATE_PLAYER_HEALTH
} from "./actionTypes";
import { IGameState, TGameActions } from './types'
import { controlTypes } from '@game/config'
import { fullscreenOn } from '@images'

const initialState: IGameState = {
  isPaused: false,
  fullscreenIcon: fullscreenOn,
  controls: controlTypes.mouse,
  health: 0
}

export default (state = initialState, action: TGameActions) => {
  switch (action.type) {
    case SET_FULLSCREEN_ICON:
      return {
        ...state,
        ...action.payload
      }
    case TOGGLE_CONTROLS:
      return {
        ...state,
        ...action.payload
      }
    case TOGGLE_PAUSE:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_PLAYER_HEALTH:
      return {
        ...state,
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}
