import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { PATHS } from '@config'
import { redirectTo } from '@utils/misc'
import { signupFailure, signupSuccess } from './actions'
import { SIGNUP_REQUEST } from './actionTypes'
import { ISignupRequestPayload } from './types'

const signup = (data: ISignupRequestPayload) =>
  getAxiosInstance().post('auth/signup', data)

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
