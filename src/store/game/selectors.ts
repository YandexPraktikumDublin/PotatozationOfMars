import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getFullscreen = (state: IAppState) => state.game.fullscreenIcon

const getPause = (state: IAppState) => state.game.isPaused

const getControls = (state: IAppState) => state.game.controls

export const getFullscreenSelector = createSelector(
  getFullscreen,
  (fullscreen) => fullscreen
)

export const getPauseSelector = createSelector(getPause, (pause) => pause)

export const getControlsSelector = createSelector(
  getControls,
  (controls) => controls
)
