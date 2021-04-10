import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { updateUserSettingsFailure, updateUserSettingsSuccess } from './actions'
import { UPDATE_USER_SETTINGS_REQUEST } from './actionTypes'
import { IUpdateUserSettingsRequestPayload } from '@store/userSettings/updateUserSettings/types'

const updateUserSettings = (data: IUpdateUserSettingsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL).put('user-settings', data)

function* updateUserSettingsSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateUserSettings, data.payload)

    yield put(updateUserSettingsSuccess({ userSettings: response.data }))
  } catch (error) {
    yield put(
      updateUserSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_USER_SETTINGS_REQUEST, updateUserSettingsSaga)])
}

export default saga
