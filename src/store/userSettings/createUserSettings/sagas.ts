import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import { createUserSettingsFailure, createUserSettingsSuccess } from './actions'
import { CREATE_USER_SETTINGS_REQUEST } from './actionTypes'
import { ICreateUserSettingsRequestPayload } from '@store/userSettings/createUserSettings/types'

const createUserSettings = (data: ICreateUserSettingsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'user-settings',
    data
  )

function* createUserSettingsSaga(data: Record<string, any>) {
  try {
    const response = yield call(createUserSettings, data.payload)

    yield put(createUserSettingsSuccess({ userSettings: response.data }))
  } catch (error) {
    yield put(
      createUserSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_USER_SETTINGS_REQUEST, createUserSettingsSaga)])
}

export default saga
