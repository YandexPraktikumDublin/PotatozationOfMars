import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { signinIUserSuccess, signinIUserFailure } from './actions'
import { SIGNIN_IUSER_REQUEST } from './actionTypes'
import { ISigninIUserRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

export const signinIUser = (data: ISigninIUserRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'signin',
    data
  )

function* signinIUserSaga(data: Record<string, any>) {
  try {
    const response = yield call(signinIUser, data.payload)

    yield put(signinIUserSuccess({ iuser: response.data }))
  } catch (error) {
    yield put(
      signinIUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(SIGNIN_IUSER_REQUEST, signinIUserSaga)])
}

export default saga
