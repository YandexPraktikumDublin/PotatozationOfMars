import {
  NEW_GAME_REQUEST,
  RESET_SCORE,
  SET_FULLSCREEN_ICON,
  TOGGLE_CONTROLS,
  TOGGLE_PAUSE,
  UPDATE_MUSIC_VOLUME,
  UPDATE_PLAYER_HEALTH,
  UPDATE_SCORE,
  UPDATE_SOUND_VOLUME
} from './actionTypes'
import { IGameState, TGameActions } from './types'
import { controlTypes } from '@game/config'
import { fullscreenOn } from '@images'

const initialState: IGameState = {
  isPaused: false,
  fullscreenIcon: fullscreenOn,
  controls: controlTypes.mouse,
  health: 0,
  score: 0,
  newGame: false,
  soundVolume: 0.1,
  musicVolume: 0.5
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
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.payload.score
      }
    case RESET_SCORE:
      return {
        ...state,
        score: 0
      }
    case NEW_GAME_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_SOUND_VOLUME:
      return {
        ...state,
        soundVolume:
          action.payload.soundVolume > 1
            ? 1
            : action.payload.soundVolume < 0
            ? 0
            : Math.round(action.payload.soundVolume * 10) / 10
      }
    case UPDATE_MUSIC_VOLUME:
      return {
        ...state,
        musicVolume:
          action.payload.musicVolume > 1
            ? 1
            : action.payload.musicVolume < 0
            ? 0
            : Math.round(action.payload.musicVolume * 10) / 10
      }
    default:
      return state
  }
}
