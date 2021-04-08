import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.userSettings.pending

const getUserSettings = (state: IAppState) => state.userSettings.userSettings

const getError = (state: IAppState) => state.userSettings.error

export const getUserSettingsPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserSettingsSelector = createSelector(
  getUserSettings,
  (userSettings) => userSettings
)

export const getUserSettingsErrorSelector = createSelector(
  getError,
  (error) => error
)
