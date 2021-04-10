import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchUserSettingsFailure, fetchUserSettingsSuccess } from './actions'
import { FETCH_USER_SETTINGS_REQUEST } from './actionTypes'

const getUserSettings = () =>
  getAxiosInstance(INNER_API_V1_URL).get('user-settings')

function* fetchUserSettingsSaga() {
  try {
    const response = yield call(getUserSettings)

    yield put(fetchUserSettingsSuccess({ userSettings: response.data }))
  } catch (error) {
    yield put(
      fetchUserSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_USER_SETTINGS_REQUEST, fetchUserSettingsSaga)])
}

export default saga
