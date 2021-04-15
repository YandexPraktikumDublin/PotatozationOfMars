import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.themes.pending

const getThemes = (state: IAppState) => state.themes.themes

const getError = (state: IAppState) => state.themes.error

export const getThemesPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getThemesSelector = createSelector(getThemes, (themes) => themes)

export const getThemesErrorSelector = createSelector(getError, (error) => error)
