import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { createIUserSuccess, createIUserFailure } from './actions'
import { CREATE_IUSER_REQUEST } from './actionTypes'
import { ICreateIUserRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

export const createIUser = (data: ICreateIUserRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'signup',
    data
  )

function* createIUserSaga(data: Record<string, any>) {
  try {
    const response = yield call(createIUser, data.payload)

    yield put(createIUserSuccess({ iuser: response.data }))
  } catch (error) {
    yield put(
      createIUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_IUSER_REQUEST, createIUserSaga)])
}

export default saga
