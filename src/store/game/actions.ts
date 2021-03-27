import {
  NEW_GAME_REQUEST,
  RESET_SCORE,
  SET_FULLSCREEN_ICON,
  TOGGLE_CONTROLS,
  TOGGLE_PAUSE,
  UPDATE_PLAYER_HEALTH,
  UPDATE_SCORE
} from './actionTypes'
import {
  IRequestNewGamePayload,
  IToggleControlsPayload,
  IToggleFullscreenPayload,
  ITogglePausePayload,
  IUpdateHealthPayload,
  IUpdateScorePayload,
  TRequestNewGame,
  TResetScore,
  TToggleControls,
  TToggleFullscreen,
  TTogglePause,
  TUpdateHealth,
  TUpdateScore
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

export const updateScore = (payload: IUpdateScorePayload): TUpdateScore => ({
  type: UPDATE_SCORE,
  payload
})

export const resetScore = (): TResetScore => ({
  type: RESET_SCORE
})

export const requestNewGame = (
  payload: IRequestNewGamePayload
): TRequestNewGame => ({
  type: NEW_GAME_REQUEST,
  payload
})
