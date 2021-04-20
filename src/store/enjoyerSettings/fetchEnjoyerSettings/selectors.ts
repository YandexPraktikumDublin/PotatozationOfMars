import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.enjoyerSettings.pending

const getEnjoyerSettings = (state: IAppState) =>
  state.enjoyerSettings.enjoyerSettings

const getError = (state: IAppState) => state.enjoyerSettings.error

export const getEnjoyerSettingsPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getEnjoyerSettingsSelector = createSelector(
  getEnjoyerSettings,
  (enjoyerSettings) => enjoyerSettings
)

export const getEnjoyerSettingsErrorSelector = createSelector(
  getError,
  (error) => error
)
