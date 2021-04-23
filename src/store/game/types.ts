import {
  TOGGLE_CONTROLS,
  SET_FULLSCREEN_ICON,
  TOGGLE_PAUSE,
  UPDATE_PLAYER_HEALTH,
  UPDATE_SCORE,
  NEW_GAME_REQUEST,
  RESET_SCORE,
  UPDATE_SOUND_VOLUME,
  UPDATE_MUSIC_VOLUME
} from './actionTypes'

export interface IGameState {
  controls: string
  fullscreenIcon: string
  isPaused: boolean
  health: number
  score: number
  newGame: boolean
  soundVolume: number
  musicVolume: number
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

export interface IUpdateScorePayload {
  score: number
}

export interface IRequestNewGamePayload {
  newGame: boolean
}

export interface IUpdateSoundVolumePayload {
  soundVolume: number
}

export interface IUpdateMusicVolumePayload {
  musicVolume: number
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

export type TUpdateScore = {
  type: typeof UPDATE_SCORE
  payload: IUpdateScorePayload
}

export type TResetScore = {
  type: typeof RESET_SCORE
}

export type TRequestNewGame = {
  type: typeof NEW_GAME_REQUEST
  payload: IRequestNewGamePayload
}

export type TUpdateSoundVolume = {
  type: typeof UPDATE_SOUND_VOLUME
  payload: IUpdateSoundVolumePayload
}

export type TUpdateMusicVolume = {
  type: typeof UPDATE_MUSIC_VOLUME
  payload: IUpdateMusicVolumePayload
}

export type TGameActions =
  | TTogglePause
  | TToggleFullscreen
  | TToggleControls
  | TUpdateHealth
  | TUpdateScore
  | TResetScore
  | TRequestNewGame
  | TUpdateSoundVolume
  | TUpdateMusicVolume
