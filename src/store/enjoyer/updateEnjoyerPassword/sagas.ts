import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import {
  updateEnjoyerPasswordSuccess,
  updateEnjoyerPasswordFailure
} from './actions'
import { UPDATE_ENJOYER_PASSWORD_REQUEST } from './actionTypes'
import { IUpdateEnjoyerPasswordRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const updateEnjoyerPassword = (data: IUpdateEnjoyerPasswordRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).put(
    'enjoyer/password',
    data
  )

function* updateEnjoyerPasswordSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateEnjoyerPassword, data.payload)

    yield put(updateEnjoyerPasswordSuccess({ enjoyer: response.data }))
  } catch (error) {
    yield put(
      updateEnjoyerPasswordFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([
    takeLatest(UPDATE_ENJOYER_PASSWORD_REQUEST, updateEnjoyerPasswordSaga)
  ])
}

export default saga
