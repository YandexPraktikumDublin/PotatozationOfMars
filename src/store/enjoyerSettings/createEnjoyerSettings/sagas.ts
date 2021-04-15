import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'
import {
  createEnjoyerSettingsFailure,
  createEnjoyerSettingsSuccess
} from './actions'
import { CREATE_ENJOYER_SETTINGS_REQUEST } from './actionTypes'
import { ICreateEnjoyerSettingsRequestPayload } from './types'

const createEnjoyerSettings = (data: ICreateEnjoyerSettingsRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'enjoyer-settings',
    data
  )

function* createEnjoyerSettingsSaga(data: Record<string, any>) {
  try {
    const response = yield call(createEnjoyerSettings, data.payload)

    yield put(createEnjoyerSettingsSuccess({ enjoyerSettings: response.data }))
  } catch (error) {
    yield put(
      createEnjoyerSettingsFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([
    takeLatest(CREATE_ENJOYER_SETTINGS_REQUEST, createEnjoyerSettingsSaga)
  ])
}

export default saga
