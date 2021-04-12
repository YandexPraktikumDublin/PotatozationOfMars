import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { updateIUserSuccess, updateIUserFailure } from './actions'
import { UPDATE_IUSER_REQUEST } from './actionTypes'
import { IUpdateIUserRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const updateIUser = (data: IUpdateIUserRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).put('user', data)

function* updateIUserSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateIUser, data.payload)

    yield put(updateIUserSuccess({ iuser: response.data }))
  } catch (error) {
    yield put(
      updateIUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_IUSER_REQUEST, updateIUserSaga)])
}

export default saga
