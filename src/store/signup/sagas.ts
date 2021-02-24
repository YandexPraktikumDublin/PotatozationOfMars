import { all, call, put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '@api'
import history from '@history'
import { PATHS } from '@config'
import { signupFailure, signupSuccess } from './actions'
import { SIGNUP_REQUEST } from './actionTypes'
import { ISignupRequestPayload } from './types'

const signup = (data: ISignupRequestPayload) =>
  axiosInstance.post('auth/signup', data)

const redirectTo = (location: string) => history.push(location)

function* signupSaga(data: Record<string, any>) {
  try {
    const response = yield call(signup, data.payload)

    yield put(signupSuccess(response.data))
    yield call(redirectTo, PATHS.BASE)
  } catch (error) {
    yield put(
      signupFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)])
}

export default saga
