import { all, call, put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '@api'
import history from '@history'
import { PATHS } from '@config'
import { authFailure, authSuccess } from './actions'
import { AUTH_REQUEST } from './actionTypes'
import { IAuthRequestPayload } from '@store/auth/types'

const signin = (data: IAuthRequestPayload) =>
  axiosInstance.post('auth/signin', data)

const redirectTo = (location: string) => history.push(location)

function* authSaga(data: Record<string, any>) {
  try {
    const response = yield call(signin, data.payload)

    yield put(authSuccess(response.data))
    yield call(redirectTo, PATHS.BASE)
  } catch (error) {
    yield put(
      authFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(AUTH_REQUEST, authSaga)])
}

export default saga
