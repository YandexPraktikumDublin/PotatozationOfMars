import { TOGGLE_CONTROLS, SET_FULLSCREEN_ICON, TOGGLE_PAUSE } from './actionTypes'
import {
  IToggleControlsPayload,
  IToggleFullscreenPayload,
  ITogglePausePayload,
  TToggleControls,
  TToggleFullscreen,
  TTogglePause
} from './types'

export const togglePause = (payload: ITogglePausePayload): TTogglePause => ({
  type: TOGGLE_PAUSE,
  payload
})

export const setFullscreenIcon = (
  payload: IToggleFullscreenPayload
): TToggleFullscreen => ({
  type: SET_FULLSCREEN_ICON,
  payload
})

export const toggleControls = (
  payload: IToggleControlsPayload
): TToggleControls => ({
  type: TOGGLE_CONTROLS,
  payload
})
