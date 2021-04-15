import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import {
  fetchEnjoyerSettingsFailure,
  fetchEnjoyerSettingsSuccess
} from './actions'
import { FETCH_ENJOYER_SETTINGS_REQUEST } from './actionTypes'

const getEnjoyerSettings = () =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).get(
    'enjoyer-settings'
  )

function* fetchEnjoyerSettingsSaga() {
  try {
    const response = yield call(getEnjoyerSettings)

    yield put(fetchEnjoyerSettingsSuccess({ enjoyerSettings: response.data }))
  } catch (error) {
    yield put(
      fetchEnjoyerSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([
    takeLatest(FETCH_ENJOYER_SETTINGS_REQUEST, fetchEnjoyerSettingsSaga)
  ])
}

export default saga
