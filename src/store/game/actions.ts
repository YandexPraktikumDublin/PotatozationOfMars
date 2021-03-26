import {
  SET_FULLSCREEN_ICON,
  TOGGLE_CONTROLS,
  TOGGLE_PAUSE,
  UPDATE_PLAYER_HEALTH
} from './actionTypes'
import {
  IToggleControlsPayload,
  IToggleFullscreenPayload,
  ITogglePausePayload,
  IUpdateHealthPayload,
  TToggleControls,
  TToggleFullscreen,
  TTogglePause,
  TUpdateHealth
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

export const updatePlayerHealth = (
  payload: IUpdateHealthPayload
): TUpdateHealth => ({
  type: UPDATE_PLAYER_HEALTH,
  payload
})
