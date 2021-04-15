import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import {
  updateEnjoyerSettingsFailure,
  updateEnjoyerSettingsSuccess
} from './actions'
import { UPDATE_ENJOYER_SETTINGS_REQUEST } from './actionTypes'
import { IUpdateEnjoyerSettingsRequestPayload } from '@store/enjoyerSettings/updateEnjoyerSettings/types'

const updateEnjoyerSettings = (data: IUpdateEnjoyerSettingsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).put(
    'enjoyer-settings',
    data
  )

function* updateEnjoyerSettingsSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateEnjoyerSettings, data.payload)

    yield put(updateEnjoyerSettingsSuccess({ enjoyerSettings: response.data }))
  } catch (error) {
    yield put(
      updateEnjoyerSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([
    takeLatest(UPDATE_ENJOYER_SETTINGS_REQUEST, updateEnjoyerSettingsSaga)
  ])
}

export default saga
