import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getFullscreen = (state: IAppState) => state.game.fullscreenIcon

const getPause = (state: IAppState) => state.game.isPaused

const getControls = (state: IAppState) => state.game.controls

const getHealth = (state: IAppState) => state.game.health

const getScore = (state: IAppState) => state.game.score

const getSoundVolume = (state: IAppState) => state.game.soundVolume

const getMusicVolume = (state: IAppState) => state.game.musicVolume

export const getFullscreenSelector = createSelector(
  getFullscreen,
  (fullscreen) => fullscreen
)

export const getPauseSelector = createSelector(getPause, (pause) => pause)

export const getControlsSelector = createSelector(
  getControls,
  (controls) => controls
)

export const getHealthSelector = createSelector(getHealth, (health) => health)

export const getScoreSelector = createSelector(getScore, (score) => score)

export const getSoundVolumeSelector = createSelector(
  getSoundVolume,
  (soundVolume) => soundVolume
)

export const getMusicVolumeSelector = createSelector(
  getMusicVolume,
  (musicVolume) => musicVolume
)
