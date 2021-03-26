import {
  TOGGLE_CONTROLS,
  SET_FULLSCREEN_ICON,
  TOGGLE_PAUSE, UPDATE_PLAYER_HEALTH
} from "./actionTypes";

export interface IGameState {
  controls: string
  fullscreenIcon: string
  isPaused: boolean
  health: number
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

export interface IUpdateHealthPayload {
  health: number
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

export type TUpdateHealth = {
  type: typeof UPDATE_PLAYER_HEALTH
  payload: IUpdateHealthPayload
}

export type TGameActions = TTogglePause | TToggleFullscreen | TToggleControls | TUpdateHealth
