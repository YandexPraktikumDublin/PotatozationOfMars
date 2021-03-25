import { TOGGLE_CONTROLS, SET_FULLSCREEN_ICON, TOGGLE_PAUSE } from './actionTypes'

export interface IGameState {
  controls: string
  fullscreenIcon: string
  isPaused: boolean
}

export interface ITogglePausePayload {
  isPaused: boolean
}

export interface IToggleFullscreenPayload {
  fullscreenIcon: string
}

export interface IToggleControlsPayload {
  controls: string
}

export type TTogglePause = {
  type: typeof TOGGLE_PAUSE
  payload: ITogglePausePayload
}

export type TToggleFullscreen = {
  type: typeof SET_FULLSCREEN_ICON
  payload: IToggleFullscreenPayload
}

export type TToggleControls = {
  type: typeof TOGGLE_CONTROLS
  payload: IToggleControlsPayload
}

export type TGameActions = TTogglePause | TToggleFullscreen | TToggleControls
